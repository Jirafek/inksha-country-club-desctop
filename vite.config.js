import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

import svgr from "vite-plugin-svgr";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), svgr()],

   build: {
      outDir: "build",
   },

   resolve: {
      alias: {
         hooks: path.resolve(__dirname, "./src/hooks/"),
         public: path.resolve(__dirname, "./public/"),
         images: path.resolve(__dirname, "./public/image/"),
         icons: path.resolve(__dirname, "./public/image/icons/"),
         data: path.resolve(__dirname, "./src/data/"),
         components: path.resolve(__dirname, "./src/components/"),
         common: path.resolve(__dirname, "./src/common/"),
         constants: path.resolve(__dirname, "./src/constants/"),
         assets: path.resolve(__dirname, "./src/assets/"),
         utils: path.resolve(__dirname, "./src/utils/"),
         pages: path.resolve(__dirname, "./src/pages/"),
         locales: path.resolve(__dirname, "./src/locales/"),
         constants: path.resolve(__dirname, "./src/constants/"),
      },
   },
});
