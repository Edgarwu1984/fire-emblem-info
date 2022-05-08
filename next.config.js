/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
  reactStrictMode: true,
  images: {
    domains: [
      'd3fd5j8wprxn3h.cloudfront.net',
      'images4.alphacoders.com',
      'catwithmonocle.com',
    ],
  },
};

module.exports = nextConfig;
