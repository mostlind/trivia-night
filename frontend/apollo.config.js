module.exports = {
  client: {
    excludes: ["src/generated/graphql.tsx"],
    service: {
      name: "trivia night",
     localSchemaFile: "frontend/schema.graphql"
    },
  },
};
