/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['preview.colorlib.com', 'i.ibb.co', 'images.pexels.com']
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
