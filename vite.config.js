import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sample: resolve(__dirname, "src/sample/index.html"),
        multiple: resolve(__dirname, "src/multiple-animation/index.html"),
      },
    },
  },
});
