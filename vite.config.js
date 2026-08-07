import { defineConfig } from "vite";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
};

async function collectFiles(directory, root = directory) {
  const files = {};

  for (const entry of await readdir(directory)) {
    const absolutePath = join(directory, entry);

    if ((await stat(absolutePath)).isDirectory()) {
      Object.assign(files, await collectFiles(absolutePath, root));
      continue;
    }

    const requestPath = `/${relative(root, absolutePath).split(sep).join("/")}`;
    files[requestPath] = {
      body: (await readFile(absolutePath)).toString("base64"),
      type: contentTypes[extname(entry).toLowerCase()] ?? "application/octet-stream",
    };
  }

  return files;
}

const sitesWorker = {
  name: "sites-static-worker",
  async closeBundle() {
    const files = await collectFiles("dist/client");
    const source = `
const files = ${JSON.stringify(files)};

function decode(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const file = files[path];

    if (!file) return new Response("Not Found", { status: 404 });

    return new Response(decode(file.body), {
      headers: {
        "Content-Type": file.type,
        "Cache-Control": path === "/index.html" ? "no-cache" : "public, max-age=31536000, immutable",
      },
    });
  },
};
`;

    await mkdir("dist/server", { recursive: true });
    await writeFile("dist/server/index.js", source);
  },
};

export default defineConfig({
  base: "/",
  plugins: [sitesWorker],
  build: {
    outDir: "dist/client",
  },
});
