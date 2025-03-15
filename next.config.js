/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig
module.exports = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true, // Set to true for SEO-friendly 301 redirect
        },
      ];
    },
  };
