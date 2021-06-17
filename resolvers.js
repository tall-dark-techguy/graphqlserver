const graphql = require("graphql");
const Author = require("./models/Author");
const Book = require("./models/Book");
const Post = require("./models/Post");
const GraphQLDate = require("graphql-date");
const { AuthorType, BookType, PostType } = require("./schema");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({}).sort({ _id: -1 });
      },
    },

    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      },
    },

    books: {
      type: new GraphQLList(BookType),
      args: { limit: { type: GraphQLInt }, offset: { type: GraphQLInt } },
      resolve(parent, args) {
        let { limit, offset } = args;
        return Book.find({}).limit(limit).skip(offset).sort({ _id: -1 });
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
      resolve(parent, args) {
        const { id, name } = args;
        return Author.findOne({ $or: [{ _id: id }, { name }] });
      },
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({}).sort({ _id: -1 });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createPost: {
      type: PostType,
      args: { body: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        let post = new Post({ body: args.body });
        return post.save();
      },
    },
    updatePost: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        body: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Post.findByIdAndUpdate(args.id, { body: args.body });
      },
    },
    deletePost: {
      type: PostType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Post.findByIdAndDelete(args.id);
      },
    },

    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const { name, age } = args;
        const author = new Author({
          name,
          age,
        });
        return author.save();
      },
    },

    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const { name, genre, authorId } = args;
        const book = new Book({
          name,
          genre,
          authorId,
        });
        return book.save();
      },
    },

    deleteBook: {
      type: BookType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Book.findByIdAndDelete(args.id);
      },
    },
  },
});

module.exports = {
  RootQuery,
  Mutation,
};
