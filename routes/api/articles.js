const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const nytController = require("../../controllers/nytController");

// Matches with "/api/articles"
router.route("/")
  .get(nytController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
