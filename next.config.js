/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["via.placeholder.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
