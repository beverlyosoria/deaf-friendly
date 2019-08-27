var express = require("express");
var router = express.Router();
var reviewCtrl = require("../controllers/reviews");

router.post("/posts/:id/reviews", reviewCtrl.create);

module.exports = router;
