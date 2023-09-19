/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};
