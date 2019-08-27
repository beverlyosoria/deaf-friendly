var Post = require("../models/post");

module.exports = {
  create
};

function create(req, res) {
  Post.findById(req.params.id, function(err, post) {
    post.reviews.push(req.body);
    post.save(function(err) {
      res.redirect(`/posts/${post._id}`);
    });
  });
}
