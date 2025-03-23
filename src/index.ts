import { zValidator } from "@hono/zod-validator";
import { makeBadge } from "badge-maker";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { logger } from "hono/logger";
import { LRUCache } from "lru-cache";
import { z } from "zod";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use(logger());

const BadgePropsSchema = z.object({
  label: z.string().optional(),
  labelColor: z.string().optional(),
  color: z.string().optional(),
  style: z.enum(["flat", "flat-square", "for-the-badge", "plastic"]).optional(),
});

const cache = new LRUCache({
  max: 1,
  ttl: 1000 * 60 * 60, // 1 hour
});

app.get("/api/badge", zValidator("query", BadgePropsSchema), async (c) => {
  const { WAKATIME_API_KEY } = env(c);

  if (!WAKATIME_API_KEY) {
    return new Response(
      makeBadge({
        label: "Error",
        message: "Wakatime API key is missing!",
        color: "red",
        style: "flat",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control":
            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
          Vary: "Accept-Encoding",
          "x-server-cache": "MISS",
        },
      },
    );
  }

  const token = btoa(WAKATIME_API_KEY);

  const { label, labelColor, color, style } = c.req.valid("query");

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
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
        Vary: "Accept-Encoding",
        "x-server-cache": "HIT",
      },
    });
  }

  const response = await fetch(
    "https://wakatime.com/api/v1/users/current/all_time_since_today",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  );

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
          "Cache-Control":
            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
          Vary: "Accept-Encoding",
          "x-server-cache": "MISS",
        },
      },
    );
  }

  const data = (await response.json()) as { data: { text: string } };

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
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
      Vary: "Accept-Encoding",
      "x-server-cache": "MISS",
    },
  });
});

app.get("/github", (c) => {
  return c.redirect("https://github.com/igorkowalczyk/wakatime-hours", 301);
});

app.get("*", (c) => {
  return c.redirect("/api/badge", 301);
});

export default app;
