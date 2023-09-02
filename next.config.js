/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
};
