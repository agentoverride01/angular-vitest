/// <reference types="vitest" />

import { defineConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(({ mode }) => ({
  plugins: [angular()],
  test: {
    globals: true,
    setupFiles: ['test/test-setup.ts'],
    include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    environment: 'happy-dom',
    /// workaround solution to make
    /// rxjs@6.x works
    /// https://github.com/analogjs/analog/issues/1009
    server: {
      deps: {
        inline: [/fesm2022/]
      }
    }
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));

