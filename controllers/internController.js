const Intern = require("../models/Intern");

// CREATE INTERN
const createIntern = async (req, res) => {
  try {
    const intern = await Intern.create(req.body);

    res.status(201).json({
      success: true,
      message: "Intern created successfully",
      data: intern,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL INTERNS
const getInterns = async (req, res) => {
  try {
    const interns = await Intern.find();

    res.status(200).json({
      success: true,
      count: interns.length,
      data: interns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createIntern,
  getInterns,
};
// GET SINGLE INTERN
const getInternById = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);

    if (!intern) {
      return res.status(404).json({
        success: false,
        message: "Intern not found",
      });
    }

    res.status(200).json({
      success: true,
      data: intern,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// UPDATE INTERN
const updateIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!intern) {
      return res.status(404).json({
        success: false,
        message: "Intern not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Intern updated successfully",
      data: intern,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// DELETE INTERN
const deleteIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndDelete(req.params.id);

    if (!intern) {
      return res.status(404).json({
        success: false,
        message: "Intern not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Intern deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createIntern,
  getInterns,
  getInternById,
  updateIntern,
  deleteIntern,
};