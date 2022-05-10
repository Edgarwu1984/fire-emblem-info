/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: false,
  reactStrictMode: true,
  images: {
    domains: [
      'd3fd5j8wprxn3h.cloudfront.net',
      'images4.alphacoders.com',
      'catwithmonocle.com',
      'areajugones.sport.es',
      'www.itl.cat',
    ],
  },
};

module.exports = nextConfig;
