import { NextConfig } from 'next'

const config: NextConfig = {  
  basePath: '/movies-app',  // Must match your repo name exactly
  output: 'export',
  distDir: 'dist',  // Explicit output directory
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default config;
