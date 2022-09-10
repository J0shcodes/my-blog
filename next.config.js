/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: "J0shcodes",
        mongodb_password: "kNX4n8pZXoEUitTm",
        mongodb_cluster: "myblog-cluster",
        mongodb_database: "blog-site-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "J0shcodes",
      mongodb_password: "kNX4n8pZXoEUitTm",
      mongodb_cluster: "myblog-cluster",
      mongodb_database: "blog-site",
    },
  };
};

module.exports = nextConfig;
