// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/syncrosale/",
  server: {
    host: true, // veya host: '0.0.0.0'
    port: 5174, // istersen portu buradan belirle
  },
});
