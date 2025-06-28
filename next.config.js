module.exports = {
  reactStrictMode: true,
  env: {
    API_AUTH_TOKEN: process.env.API_AUTH_TOKEN,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
