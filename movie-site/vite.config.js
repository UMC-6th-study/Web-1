import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "page",
        replacement: path.resolve(__dirname, "./src/components/page/"),
      },
      {
        find: "item",
        replacement: path.resolve(__dirname, "./src/components/item/"),
      },
      {
        find: "custom",
        replacement: path.resolve(__dirname, "./src/components/custom/"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components/"),
      },
    ],
  },
});
