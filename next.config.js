/** @type {import('next').NextConfig} */
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const nextConfig = {
  // reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

module.exports = nextConfig;
