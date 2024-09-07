/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "files.edgestore.dev",
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
