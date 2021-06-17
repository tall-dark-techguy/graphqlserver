const {
  GraphQLObjectType,
  ID,
  NonNull,
  String,
  Int,
  List,
} = require("../config/imports");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: ID },
    name: { type: String },
    age: { type: Int },
    // books: {
    //   type: new List(BookType),
    //   resolve(parent, args) {
    //     return Book.find({ authorId: parent.id });
    //   },
    // },
  }),
});

module.exports = AuthorType;
