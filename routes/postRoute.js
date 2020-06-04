var express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");
var auth = require("../middleware/auth")();
router.get("/mypost", auth.authenticate(), postController.get_post);

module.exports = router;
