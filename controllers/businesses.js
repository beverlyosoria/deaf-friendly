var Business = require("../models/business");

module.exports = {
  index
};

function index(req, res) {
  res.render("businesses/index", { title: "Business" });
}
