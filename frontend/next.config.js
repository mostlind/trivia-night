module.exports = {
  async redirects() {
    return [
      {
        source: "/host/setup/:gameId/questions",
        destination: "/host/setup/:gameId",
        permanent: false,
      },
    ];
  },
};
