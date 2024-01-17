/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.freetogame.com',
            port: '',
          },
        ],
    },
    typescript: {
      ignoreBuildErrors: true
  },
}

module.exports = nextConfig
