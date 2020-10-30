module.exports = {
  async redirects() {
    return [
      {
        source: "/setup/:gameId/questions",
        destination: "/setup/:gameId",
        permanent: false,
      },
    ];
  },
};
