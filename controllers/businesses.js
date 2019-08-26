var Business = require("../models/business");
var User = require("../models/user");

module.exports = {
  index,
  show
};




function index(req, res,) {
  Business.find({}, function(err, business) {
    res.render("businesses/index", { title: "All", business });


  User.findById(req.params.id, function(err, user) {
    res.render("businesses/index", {
      user: req.user,
      name: req.query.name
    });
  });
}

function show(req, res) {
  Business.findById(req.params.id);
  res.render("businesses/show"),
    {
      title: "Detail",
      business
    };
}
