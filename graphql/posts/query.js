const Post = require("../../models/Post");
const { List, ID, NonNull } = require("../config/imports");
const PostType = require("./schema");

exports.post = {
  type: PostType,
  args: { id: { type: NonNull(ID) } },
  resolve(parent, args) {
    return Post.findById(args.id);
  },
};

exports.posts = {
  type: new List(PostType),
  resolve(parent, args) {
    return Post.find({}).sort({ _id: -1 });
  },
};

exports.searchPosts = {
  type: new List(PostType),
  resolve(parent, args) {
    return Post.find({});
  },
};
