const AuthorType = require("../authors/schema");
const { GraphQLObjectType, ID, String } = require("../config/imports");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: ID },
    name: { type: String },
    genre: { type: String },
    authorId: { type: ID },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
  }),
});

module.exports = BookType;
