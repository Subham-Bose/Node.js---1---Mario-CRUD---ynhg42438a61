const express = require("express");
const router = express.Router();
const {
  getAllCharacter,
  createCharacter,
  getCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controller/tasks");

router.route("/").get(getAllCharacter).post(createCharacter);
router
  .route("/:id")
  .get(getCharacter)
  .patch(updateCharacter)
  .delete(deleteCharacter);

module.exports = router;
