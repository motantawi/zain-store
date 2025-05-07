/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        pathname: "/show/**",
      },
    ],
  },
};
module.exports = nextConfig;
