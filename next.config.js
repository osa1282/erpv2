/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    // Disable SWC compiler
    styledComponents: false,
  },
  webpack: (config, { isServer }) => {
    // Use Babel for all JavaScript/TypeScript files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;