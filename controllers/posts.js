var User = require("../models/user");
var Post = require("../models/post");

module.exports = {
  index,
  show
};

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

function show(req, res) {
  Post.findById(req.params.id);
  res.render("posts/show"),
    {
      title: "Detail",
      post
    };
}
