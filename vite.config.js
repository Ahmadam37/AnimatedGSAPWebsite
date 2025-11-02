import { defineConfig } from "vite";

export default defineConfig({
  base: "/AnimatedGSAPWebsite/",
  build: {
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
    ],

    copyPublicDir: true,

    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
