/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/movies-app',
  assetPrefix: '/movies-app/', // Add this line with the trailing slash
  images: { unoptimized: true },
}
module.exports = nextConfig
