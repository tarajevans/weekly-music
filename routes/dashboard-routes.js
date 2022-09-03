const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");
const dashboardController = require("../controllers/dashboard-controller");

router.get("/", withAuth, dashboardController.loadAllPostAdminPage);

router.get("/new", withAuth, dashboardController.loadNewPostPage);

router.get("/edit/:id", withAuth, dashboardController.loadEditPostPage);

module.exports = router;
