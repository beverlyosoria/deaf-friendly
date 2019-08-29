var express = require("express");
var router = express.Router();
var postsCtrl = require("../controllers/posts");

/* GET users listing. */
router.get("/", postsCtrl.index);
router.get("/new", postsCtrl.new);
router.get("/:id", postsCtrl.show);
router.get("/:id/edit", postsCtrl.edit);
router.post("/", postsCtrl.create);
router.put("/:id", postsCtrl.update);

module.exports = router;
