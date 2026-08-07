import { defineConfig } from "vite";
import { mkdir, writeFile } from "node:fs/promises";

const sitesWorker = {
  name: "sites-static-worker",
  async closeBundle() {
    await mkdir("dist/server", { recursive: true });
    await writeFile(
      "dist/server/index.js",
      "export default { async fetch(request, env) { const url = new URL(request.url); if (url.pathname === '/') url.pathname = '/index.html'; return env.ASSETS.fetch(new Request(url, request)); } };\n",
    );
  },
};

export default defineConfig({
  base: "/",
  plugins: [sitesWorker],
  build: {
    outDir: "dist",
  },
});
