const express = require("express");

const {
  createIntern,
  getInterns,
  getInternById,
  updateIntern,
  deleteIntern,
} = require("../controllers/internController");

const router = express.Router();

router.route("/")
  .get(getInterns)
  .post(createIntern);

router
  .route("/:id")
  .get(getInternById)
  .put(updateIntern)
  .delete(deleteIntern);

  
module.exports = router;