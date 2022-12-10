/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: function (config, options) {
    config.module.rules = [
        ...config.module.rules,
      {
        test: /ace-builds.*\/worker-.*$/,
        type: "asset/resource"
      }
    ]

    return config;
  }
}

module.exports = nextConfig
