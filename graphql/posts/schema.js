const {
  GraphQLObjectType,
  ID,
  String,
  Int,
  Date,
} = require("../config/imports");

const PostType = new GraphQLObjectType({
  name: "Post",

  fields: () => ({
    id: { type: ID },
    body: { type: String },
    likes: { type: Int },
    unlikes: { type: Int },
    dateCreated: { type: Date },
  }),
});

module.exports = PostType;
