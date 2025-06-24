/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      });

  
      return config;
    },
    i18n
  };
  
  module.exports = nextConfig;