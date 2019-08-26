var Business = require("../models/business");
var User = require("../models/user");

module.exports = {
  index
};

function index(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.render("businesses/index", {
      user: req.user,
      name: req.query.name
    });
  });
}
