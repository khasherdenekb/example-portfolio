/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'admin.baaskaherbalifeclub.com',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
