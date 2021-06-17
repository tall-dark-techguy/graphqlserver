const { GraphQLObjectType } = require("./imports");
const PostQuery = require("../posts/query");
const AuthorQuery = require("../authors/query");
const BookQuery = require("../books/query");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",

  fields: {
    ...PostQuery,
    ...AuthorQuery,
    ...BookQuery,
  },
});

module.exports = RootQuery;
