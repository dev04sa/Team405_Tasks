const express = require("express");
const {
  handleGetAllUser,
  handleGetUserById,
  handlePostUser,
  handlePatchUser,
  handleDeleteUser,
} = require("../controllers/user");
const router = express.Router();

router.route("/").get(handleGetAllUser).post(handlePostUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handlePatchUser)
  .delete(handleDeleteUser);

module.exports = router;
