const Book = require("../../models/Book");
const { NonNull, ID, List } = require("../config/imports");
const { BookType } = require("./schema");

exports.book = {
  type: BookType,
  args: { id: { type: NonNull(ID) } },
  resolve(parent, args) {
    return Book.findById(args.id);
  },
};

exports.books = {
  type: new List(BookType),
  resolve(parent, args) {
    return Books.find({}).sort({ id: -1 });
  },
};
