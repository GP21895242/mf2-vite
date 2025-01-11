import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3003,
    hmr: false, // disable hot module reload to integrate with webpack
  },
  base: "http://localhost:3003",
  // resolve: {
  //   alias: {
  //     "@demo/test-libs": path.resolve(__dirname, "../../libs/test-libs/src"),
  //   }
  // },
  build: {
    target: "esnext",
  },
  
  plugins: [
    federation({
      name: "viteDemo",
      filename: "remoteEntry.js",
      manifest: true,
      remotes: {},
      exposes: {
        "./button": "./src/button.jsx",
      },
      shared: {
        react: {
          requiredVersion: "^18.3.1",
          singleton: true,
        },
        "react-dom": {
          requiredVersion: "^18.3.1",
          singleton: true,
        },
        "@demo/test-libs": {
          singleton: true,
        },
      },
    }),
    react(),
  ],
});

