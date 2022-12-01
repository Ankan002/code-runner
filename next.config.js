/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "hi"],
    defaultLocale: "hi"
  }
}

module.exports = nextConfig
