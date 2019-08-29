var Post = require("../models/post");
var User = require("../models/user");

module.exports = {
  create,
  delete: delReview
};

function delReview(req, res) {
  Post.findOne({ "reviews._id": req.params.id }, function(err, post) {
    post.reviews.id(req.params.id).remove();
    post.save(function(err) {
      if (err) console.log(err);
      res.redirect(`/posts/${post._id}`);
    });
  });
}

function create(req, res) {
  User.findById(req.session.passport.user, function(err, user) {
    Post.findById(req.params.id, function(err, post) {
      post.reviews.push(req.body);
      post.review.user.push(user);
      post.save(function(err) {
        res.redirect(`/posts/${post._id}`, { user });
      });
    });
  });
}
