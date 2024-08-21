import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills"
import tailwindcss from "tailwindcss";
// This step is done to bring some libraries like bip39 which isn't available in plain html, css and js.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    outDir: '../dist', // Specify the output directory.
  }
});
