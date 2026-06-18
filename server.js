import { serve, file } from "bun";
import { join } from "path";

const ROOT = import.meta.dir;

serve({
  port: 3333,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    if (path === "/") path = "/index.html";
    const filePath = join(ROOT, path);
    const f = file(filePath);
    const exists = await f.exists();
    if (!exists) return new Response("Not Found", { status: 404 });
    return new Response(f);
  },
});
