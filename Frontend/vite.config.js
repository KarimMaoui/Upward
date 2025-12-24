import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // On force la racine, c'est tout ce qu'il faut pour Vercel
});
