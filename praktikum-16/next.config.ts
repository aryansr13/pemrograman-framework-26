/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com", // Domain avatar Google
      "avatars.githubusercontent.com", // Domain avatar GitHub
    ],
  },
}

module.exports = nextConfig