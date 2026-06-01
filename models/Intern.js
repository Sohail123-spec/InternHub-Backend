const mongoose = require("mongoose");

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Intern name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },

    college: {
      type: String,
      required: [true, "College name is required"],
    },

    domain: {
      type: String,
      required: true,
      enum: [
        "MERN Stack",
        "Full Stack",
        "Frontend Development",
        "Backend Development",
        "Java Development",
        "Python Development",
        "AI/ML",
        "Data Science",
        "Cyber Security",
        "VLSI",
        ],
    },

    status: {
      type: String,
      enum: ["Active", "Completed", "On Hold"],
      default: "Active",
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Intern", internSchema);