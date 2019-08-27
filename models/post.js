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
    skills: {
      type: String,
      enum: [
        "Positive Attitude",
        "Makes Eye Contact",
        "Speaks Clearly",
        "Pen and Paper Available",
        "Willingness to Gesture",
        "Knows Sign Language",
        "Subtitles/Closed Caption/Open Caption",
        "Schedule/Order On-line or E-mail ",
        "Assisted Listening Devices",
        "Accepts Relay Calls",
        "Experience Hiring Interpreter"
      ]
    }
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
  reviews: [reviewSchema]
});

module.exports = mongoose.model("Post", postSchema);
