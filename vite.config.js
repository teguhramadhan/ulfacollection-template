import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Agar bisa diakses di jaringan lokal
    port: 3000, // Port yang kamu pilih
  },
});
