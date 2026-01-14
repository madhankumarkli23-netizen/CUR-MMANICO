/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    // Make nodemailer and sendgrid optional dependencies for server-side
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      };
      // Mark as external to prevent webpack from bundling
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push('nodemailer', '@sendgrid/mail');
      } else {
        config.externals = [
          config.externals,
          'nodemailer',
          '@sendgrid/mail',
        ];
      }
    }
    return config;
  },
};

export default nextConfig;
