/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    // Make nodemailer and sendgrid optional dependencies
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'nodemailer': 'commonjs nodemailer',
        '@sendgrid/mail': 'commonjs @sendgrid/mail',
      });
    }
    return config;
  },
};

export default nextConfig;
