/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

const withYAML = require('next-yaml');
module.exports = withYAML(nextConfig);
