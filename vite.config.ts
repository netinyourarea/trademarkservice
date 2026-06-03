import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

function githubPagesFallback() {
  return {
    name: "github-pages-fallback",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexFile = path.join(distDir, "index.html");
      const fallbackFile = path.join(distDir, "404.html");

      if (fs.existsSync(indexFile)) {
        fs.copyFileSync(indexFile, fallbackFile);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    githubPagesFallback(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
