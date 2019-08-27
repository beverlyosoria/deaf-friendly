var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String, //temporary
    required: true
  }
});

module.exports = mongoose.model("Post", postSchema);
