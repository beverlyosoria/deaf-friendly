var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema(
  {
    content: String,
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    skills: [
      {
        type: String
      }
    ],
    user: []
  },

  {
    timestamps: true
  }
);

var postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String, //temporary
    required: true
  },
  reviews: [reviewSchema],
  user: []
});

module.exports = mongoose.model("Post", postSchema);
