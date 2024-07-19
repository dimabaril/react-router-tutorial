import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // chenge defaulf port to 5174
  server: {
    port: 5174,
  },
});
