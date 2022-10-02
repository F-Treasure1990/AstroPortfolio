import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import path from 'path'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite : {
    resolve: {
      alias: {
      "@styles": path.resolve('./src/styles'),
      "@components": path.resolve('./src/Components'),
      "@layouts": path.resolve('./src/Layouts'),
      "@public": path.resolve('./public'),
      "@hooks": path.resolve('./src/Hooks'),
      }
    }
  }
});

