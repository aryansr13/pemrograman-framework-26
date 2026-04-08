import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: "jsdom",
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: [
  'src/**/*.{ts,tsx}',
  '!src/middleware.ts',
  '!src/middleware/**',
  '!src/views/**',
  '!src/services/**',
  '!src/lib/**',
  '!src/utils/**',
  '!src/pages/api/**',
  '!src/pages/dashboard/**',
  '!src/pages/editor/**',
  '!src/pages/profile/**',
  '!src/pages/setting/**',
  '!src/pages/user/**',
  '!src/pages/shop/**',
  '!src/pages/blog/**',
  '!src/pages/admin/**',
  '!src/pages/404.tsx',
  '!src/**/*.d.ts',
  '!**/_app.tsx',
  '!**/_document.tsx',
  '!src/pages/produk/[id].tsx',
  '!src/pages/produk/server.tsx',
  '!src/pages/produk/static.tsx',
],
}

export default createJestConfig(config)