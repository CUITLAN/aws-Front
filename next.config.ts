import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Modo estricto de React
  trailingSlash: false, // URLs sin barra final
  output: 'export', // Cambia de 'standalone' a 'export'
};

export default nextConfig;
