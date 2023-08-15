import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./testSetup.ts'],
    include: ['./**/*.test.(ts|tsx)'],
    alias: [
        {
            find: /.+\.(jpg|jpeg|png|gif|svg|webp|)$/,
            replacement: './__mocks__/fileMock.js'
        }
    ],
    testTimeout: 100000
  },
})