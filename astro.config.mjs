import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { defaultLocale } from './src/i18n/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cute-symbols.pages.dev',
  output: 'server',
  adapter: cloudflare(),
  // 多语言配置
  i18n: {
    defaultLocale: defaultLocale,
    locales: ['en', 'fil', 'ms', 'bn', 'pl'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  // 构建优化
  build: {
    inlineStylesheets: 'auto', // 自动内联小样式表
  },
  vite: {
    build: {
      // 优化构建性能
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
          // 代码分割
          manualChunks: {
            'vendor': ['@astrojs/tailwind'],
          },
        },
      },
      // 使用 Vite 内置的 esbuild 压缩器（更快）
      minify: 'esbuild',
      // 资源内联限制（4KB）
      assetsInlineLimit: 4096,
    },
    // CSS优化
    css: {
      devSourcemap: true,
    },
  },
});
