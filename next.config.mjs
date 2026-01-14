/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/gst',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/audit',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/roc',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/tax',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
