/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/development-service',
        destination: '/services/development-service',
        permanent: true,
      },
      {
        source: '/lp-service',
        destination: '/services/lp-service',
        permanent: true,
      },
      {
        source: '/coding-service',
        destination: '/services/coding-service',
        permanent: true,
      },
      {
        source: '/ads-service',
        destination: '/services/ads-service',
        permanent: true,
      },
      {
        source: '/seo-service',
        destination: '/services/seo-service',
        permanent: true,
      },
      {
        source: '/writing-service',
        destination: '/services/writing-service',
        permanent: true,
      },
      {
        source: '/ai-service',
        destination: '/services/ai-service',
        permanent: true,
      },
    ];
  },
};

export default nextConfig; 