const express = require("express");

const {
  createIntern,
  getInterns,
  getInternById,
  updateIntern,
  deleteIntern,
} = require("../controllers/internController");
const protect = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

router.route("/")
  .get(protect, getInterns)
  .post(protect, createIntern);

router
  .route("/:id")
  .get(protect, getInternById)
  .put(protect, updateIntern)
  .delete(protect, deleteIntern);

  
module.exports = router;