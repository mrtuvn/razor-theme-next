/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    domains: ["via.placeholder.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
