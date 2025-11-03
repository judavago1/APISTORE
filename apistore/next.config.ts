/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Esto reemplaza a next export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
