import { serve, file } from "bun";
import { join } from "path";
import { readdir } from "fs/promises";
import homepage from "./index.html";

const ROOT = import.meta.dir;
const SAVES_DIR = join(ROOT, "saves");

function sanitize(name) {
  return name.replace(/[^a-zA-Z0-9_\- ]/g, "_");
}

serve({
  port: 3333,
  development: {
    hmr: true,
    console: true,
  },
  routes: {
    "/": homepage,

    "/api/saves": {
      async GET() {
        const dir = await readdir(SAVES_DIR);
        const names = dir
          .filter(f => f.endsWith(".json"))
          .map(f => f.slice(0, -5))
          .sort();
        return Response.json(names);
      },
    },
  },

  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;
    const filePath = join(ROOT, path);

    const saveMatch = path.match(/^\/api\/saves\/(.+)$/);
    if (saveMatch) {
      const name = sanitize(saveMatch[1]);
      const savePath = join(SAVES_DIR, name + ".json");
      if (!savePath.startsWith(SAVES_DIR)) {
        return new Response("Bad path", { status: 400 });
      }

      if (req.method === "GET") {
        const f = file(savePath);
        const exists = await f.exists();
        if (!exists) return new Response("Not Found", { status: 404 });
        return new Response(f);
      }

      if (req.method === "PUT") {
        const body = await req.json();
        await Bun.write(savePath, JSON.stringify(body, null, 2));
        return new Response("OK", { status: 200 });
      }

      if (req.method === "DELETE") {
        await Bun.write(savePath, "").catch(() => {});
        return new Response("OK", { status: 200 });
      }
    }

    const f = file(filePath);
    const exists = await f.exists();
    if (!exists) return new Response("Not Found", { status: 404 });
    return new Response(f);
  },
});
