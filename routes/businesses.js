var express = require("express");
var router = express.Router();
var businessesCtrl = require("../controllers/businesses");

/* GET users listing. */
router.get("/", businessesCtrl.index);
router.get("/:id", businessesCtrl.show);

module.exports = router;
