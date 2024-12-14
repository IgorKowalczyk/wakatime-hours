import "@std/dotenv/load";
import { type Format, makeBadge } from "https://esm.sh/badge-maker@3.3.1";
import { LRUCache } from "https://esm.sh/lru-cache@10.1.0";

type BadgeProps = {
 label?: Format["label"];
 labelColor?: Format["labelColor"];
 color?: Format["color"];
 style?: Format["style"];
};

const env = Deno.env.toObject();
const port = parseInt(Deno.env.get("PORT") || env["PORT"] || "8080");

const cache = new LRUCache({
 max: 1,
 ttl: 1000 * 60 * 60, // 1 hour
});

const api = Deno.env.get("WAKATIME_API_KEY") || env["WAKATIME_API_KEY"];
if (!api) throw new Error("WAKATIME_API_KEY is not defined in .env file.");
const token = btoa(api);

Deno.serve(
 {
  port: port,
 },
 async (req) => {
  if (req.method !== "GET") {
   return new Response("Invaild method! Use GET instead.", { status: 405 });
  }

  console.log(`${req.method} ${req.url}`);

  const url = new URL(req.url);
  const path = url.pathname;

  if (path !== "/api/badge") {
   return Response.redirect(new URL("/api/badge", req.url).toString(), 301);
  }

  const { label, labelColor, color, style } = Object.fromEntries(new URLSearchParams(url.search)) as BadgeProps;
  const start = performance.now();

  if (cache.has("data")) {
   const badge = makeBadge({
    label: label || "Wakatime",
    message: cache.get("data") as string,
    color: color || "blue",
    labelColor: labelColor || "grey",
    style: style || "flat",
   });

   return new Response(badge, {
    status: 200,
    headers: {
     "Content-Type": "image/svg+xml",
     "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
     Vary: "Accept-Encoding",
     "x-server-cache": "HIT",
     ...(Deno.env.get("NODE_ENV") !== "development" && {
      "Server-Timing": `response;dur=${performance.now() - start}ms`,
     }),
    },
   });
  }

  const response = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
   method: "GET",
   headers: {
    Authorization: `Basic ${token}`,
   },
  });

  if (!response.ok) {
   return new Response(
    makeBadge({
     label: "Error",
     message: "Internal server error!",
     color: "red",
     style: "flat",
    }),
    {
     status: 500,
     headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
      Vary: "Accept-Encoding",
      "x-server-cache": "MISS",
      ...(Deno.env.get("NODE_ENV") !== "development" && {
       "Server-Timing": `response;dur=${performance.now() - start}ms`,
      }),
     },
    },
   );
  }

  const data = await response.json();

  cache.set("data", data.data?.text || "Getting data...");

  const badge = makeBadge({
   label: label || "Wakatime",
   message: data.data?.text || "Getting data...",
   color: color || "blue",
   labelColor: labelColor || "grey",
   style: style || "flat",
  });

  return new Response(badge, {
   status: 200,
   headers: {
    "Content-Type": "image/svg+xml",
    "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
    Vary: "Accept-Encoding",
    "x-server-cache": "MISS",
    ...(Deno.env.get("NODE_ENV") !== "development" && {
     "Server-Timing": `response;dur=${performance.now() - start}ms`,
    }),
   },
  });
 },
);
