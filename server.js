const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const internRoutes = require("./routes/internRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/interns", internRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InternHub API Running Successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});