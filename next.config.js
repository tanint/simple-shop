/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    /* use as template string only */
    /* to avoid error Array of strings received invalid values (, ) */
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
