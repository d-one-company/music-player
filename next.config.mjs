/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  // ! Remove this when we actually get the images from the server.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.*',
        port: '',
      },
    ],
  },
};

export default nextConfig;
