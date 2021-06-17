/*
 * commonly used imports
 * and destructures
 */
const graphql = require("graphql");
const GraphQLDate = require("graphql-date");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = graphql;

module.exports = {
  GraphQLObjectType,
  GraphQLSchema,

  // scalars
  ID: GraphQLID,
  String: GraphQLString,
  Int: GraphQLInt,
  Float: GraphQLFloat,
  List: GraphQLList,
  NonNull: GraphQLNonNull,
  Date: GraphQLDate,
};
