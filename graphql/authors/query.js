const Author = require("../../models/Author");
const { ID, NonNull, List } = require("../config/imports");
const AuthorType = require("./schema");

exports.author = {
  type: AuthorType,
  args: { id: { type: NonNull(ID) } },
  resolve(parent, args) {
    return Author.findById(args.id);
  },
};

exports.authors = {
  type: new List(AuthorType),
  resolve(parent, args) {
    return Author.find({}).sort({ id: -1 });
  },
};
