/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  env: {
    ANALYTICS_ID: process.env.GOOGLE_ANALYTICS,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["thecodingsolution.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig
