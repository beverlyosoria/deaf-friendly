var User = require("../models/user");
var Post = require("../models/post");

module.exports = {
  index,
  new: newPost,
  show
};
function show(req, res) {
  Post.findById(req.params.id);
  res.render("posts/show"),
    {
      title: "Detail",
      post
    };
}

function newPost(req, res) {
  res.render("posts/index", { title: "Add Post", posts });
}

function index(req, res) {
  User.findById(req.params.id, function(err, user) {
    Post.find({}, function(err, post) {
      res.render("posts/index", {
        post,
        user: req.user,
        name: req.query.name
      });
    });
  });
}
