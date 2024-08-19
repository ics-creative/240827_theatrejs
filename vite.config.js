import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        sample: resolve(root, "sample", "index.html"),
        multiple: resolve(root, "multiple-animation", "index.html"),
      },
    },
    base: "/240827_theatrejs/",
  },
});
