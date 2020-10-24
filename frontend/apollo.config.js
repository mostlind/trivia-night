module.exports = {
  client: {
    excludes: ["src/generated/graphql.tsx"],
    service: {
      name: "todo",
      url: "http://hasura.todotxt.localhost/v1/graphql",
      headers: {
        Authorization: "Bearer user 99967dce-e72e-481e-b911-e03d3216d61c",
      },
    },
  },
};
