/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["admin.baaskaherbalifeclub.com"],
  },
};

export default nextConfig;
