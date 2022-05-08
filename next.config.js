/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'd3fd5j8wprxn3h.cloudfront.net',
      'images4.alphacoders.com',
      'catwithmonocle.com',
    ],
  },
  include: ['next-env.d.ts', 'pages/**/*', 'components/**/*'],
};

module.exports = nextConfig;
