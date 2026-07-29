import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.tsx"],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "resources/js/Components"),
      },
      {
        find: "@/lib",
        replacement: path.resolve(__dirname, "resources/js/lib"),
      },
      {
        find: "@/data",
        replacement: path.resolve(__dirname, "resources/js/data"),
      },
      {
        find: "next/link",
        replacement: path.resolve(__dirname, "resources/js/shims/next-link.tsx"),
      },
      {
        find: "next/image",
        replacement: path.resolve(__dirname, "resources/js/shims/next-image.tsx"),
      },
      {
        find: "next/navigation",
        replacement: path.resolve(
          __dirname,
          "resources/js/shims/next-navigation.ts",
        ),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "resources/js"),
      },
    ],
  },
});
