module.exports = {
  async redirects() {
    return [
      {
        source: '/games/:gameId/questions',
        destination: '/games/:gameId',
        permanent: false
      },
    ]
  },
}
