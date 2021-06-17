const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  body: String,
  likes: {
    type: Number,
    default: 0,
  },
  unlikes: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", PostSchema);
