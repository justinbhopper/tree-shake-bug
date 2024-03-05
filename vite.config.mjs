import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(config => {
  return {
    build: {
      copyPublicDir: false,
      sourcemap: false,
      outDir: "build",
      chunkSizeWarningLimit: 99999,
      lib: {
        entry: resolve(__dirname, 'src/index.tsx'),
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
        }
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify("production")
    },
    plugins: [
      react(),
      visualizer({ open: true }),
    ],
  };
});
