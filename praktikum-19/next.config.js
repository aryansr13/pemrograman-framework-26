/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Mengizinkan semua domain HTTPS
      },
      {
        protocol: 'http',
        hostname: '**', // Mengizinkan semua domain HTTP
      },
    ],
  },
};

module.exports = nextConfig; 
// Catatan: Jika pakai .mjs, ganti baris atas dengan 'export default nextConfig;'