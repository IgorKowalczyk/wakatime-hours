import { makeBadge } from "https://esm.sh/badge-maker@3.3.1";
import type { Format } from "https://esm.sh/badge-maker@3.3.1";
import { Buffer } from "https://esm.sh/buffer@6.0.3";
import { load } from "https://deno.land/std@0.208.0/dotenv/mod.ts";
import { LRUCache } from "https://esm.sh/lru-cache@10.1.0";

type BadgeProps = {
 label?: string;
 labelColor?: string;
 color?: string;
 style?: string;
};

const env = await load();
const port = parseInt(Deno.env.get("PORT") as string) || parseInt(env["PORT"]) || 8080;
const server = Deno.listen({ port: port });

const cache = new LRUCache({
 max: 1,
 ttl: 1000 * 60 * 60, // 1 hour
});

console.log(`HTTP webserver running.  Access it at:  http://localhost:${port}/`);

const api = Deno.env.get("WAKATIME_API_KEY") || env["WAKATIME_API_KEY"];
if (!api) throw new Error("WAKATIME_API_KEY is not defined in .env file.");
const token = Buffer.from(api).toString("base64");

for await (const conn of server) {
 serveHttp(conn).catch(console.error) as Promise<void>;
}

async function serveHttp(conn: Deno.Conn) {
 const httpConn = Deno.serveHttp(conn) as Deno.HttpConn;

 for await (const requestEvent of httpConn) {
  if (requestEvent.request.method !== "GET") {
   requestEvent.respondWith(new Response("Invaild method! Use GET instead.", { status: 405 }));
   continue;
  }

  const url = new URL(requestEvent.request.url) as URL;
  const path = url.pathname as string;

  if (path !== "/api/badge") {
   requestEvent.respondWith(
    new Response("Redirecting...", {
     status: 302,
     headers: {
      Location: "/api/badge",
     },
    }),
   );
   continue;
  }

  const { label, labelColor, color, style } = Object.fromEntries(new URLSearchParams(url.search)) as BadgeProps;
  const start = Date.now();

  if (cache.has("data")) {
   const badge = makeBadge({
    label: label || "Wakatime",
    message: cache.get("data") as string,
    color: color || "blue",
    labelColor: labelColor || "grey",
    style: style || "flat",
   } as Format);

   requestEvent.respondWith(
    new Response(badge, {
     status: 200,
     headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
      Vary: "Accept-Encoding",
      "x-server-cache": "HIT",
      ...(Deno.env.get("NODE_ENV") !== "development" && {
       "Server-Timing": `response;dur=${Date.now() - start}ms`,
      }),
     },
    }),
   );
   continue;
  }

  const response = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
   method: "GET",
   headers: {
    Authorization: `Basic ${token}`,
   },
  });

  if (!response.ok) {
   requestEvent.respondWith(
    new Response(makeBadge({ label: "Error", message: "Internal server error!", color: "red", style: "flat" }), {
     status: 500,
     headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
      Vary: "Accept-Encoding",
      "x-server-cache": "MISS",
      ...(Deno.env.get("NODE_ENV") !== "development" && {
       "Server-Timing": `response;dur=${Date.now() - start}ms`,
      }),
     },
    }),
   );
   continue;
  }

  const data = await response.json();

  cache.set("data", data.data?.text || "Getting data...");

  const badge = makeBadge({
   label: label || "Wakatime",
   message: data.data?.text || "Getting data...",
   color: color || "blue",
   labelColor: labelColor || "grey",
   style: style || "flat",
  } as Format);

  requestEvent.respondWith(
   new Response(badge, {
    status: 200,
    headers: {
     "Content-Type": "image/svg+xml",
     "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
     Vary: "Accept-Encoding",
     "x-server-cache": "MISS",
     ...(Deno.env.get("NODE_ENV") !== "development" && {
      "Server-Timing": `response;dur=${Date.now() - start}ms`,
     }),
    },
   }),
  );
 }
}
