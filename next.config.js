/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.dnsevercorp.com'],
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://coffee.kspark.link/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
