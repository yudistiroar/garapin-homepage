import { defineConfig } from "vite";
import { mkdir, writeFile } from "node:fs/promises";

const sitesWorker = {
  name: "sites-static-worker",
  async closeBundle() {
    await mkdir("dist/server", { recursive: true });
    await writeFile(
      "dist/server/index.js",
      "export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n",
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
