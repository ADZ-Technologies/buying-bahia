/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        unoptimized: process.env.NODE_ENV === 'development',
        domains: ['members.mlsvallarta.com', 'images.unsplash.com'],
    },
}

module.exports = nextConfig
