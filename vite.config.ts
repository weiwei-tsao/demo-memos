import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import reactRefresh from '@vitejs/plugin-react-refresh';

// const devProxyServer = "http://localhost:8081/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [reactRefresh()],
  server: {
    host: "0.0.0.0",
    port: 3009,
    open: true,
  //   proxy: {
  //     "^/api": {
  //       target: devProxyServer,
  //       changeOrigin: true,
  //     },
  //     "^/o/": {
  //       target: devProxyServer,
  //       changeOrigin: true,
  //     },
  //     "^/u/\\d*/rss.xml": {
  //       target: devProxyServer,
  //       changeOrigin: true,
  //     },
  //     "/explore/rss.xml": {
  //       target: devProxyServer,
  //       changeOrigin: true,
  //     },
  //   },
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
    },
  },
});
