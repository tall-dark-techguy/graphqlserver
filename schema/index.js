const graphql = require("graphql");
const { RootQuery, Mutation } = require("../resolvers");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
