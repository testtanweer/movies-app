/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/movies-app', // Required for GitHub Pages subfolders
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js Image Optimization
}
module.exports = nextConfig
