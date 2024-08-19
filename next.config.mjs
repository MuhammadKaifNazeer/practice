/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Assuming HTTPS for Unsplash images
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https', // Assuming HTTPS for Unsplash images
        hostname: 'pro.aceternity.com',
      },
      {
        protocol: 'https', // Assuming HTTPS for Unsplash images
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

export default nextConfig;