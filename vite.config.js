import { defineConfig } from "vite";

const basePath = process.env.VITE_BASE_PATH || "/Vectify_The-Social-Platform/";

export default defineConfig({
  base: basePath,
});
