/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* plugin configuration options */
});

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["production"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "elyteweb.web.app",
    //     port: "",
    //   },
    // ],
  },
  output: 'export',
};

module.exports = nextConfig;
