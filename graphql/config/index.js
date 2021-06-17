const { GraphQLSchema, GraphQLObjectType } = require("./imports");
const RootQuery = require("./RootQuery");

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});
