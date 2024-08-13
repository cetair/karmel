const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000 || 1337;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/gkri-karmel", {})
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.error("Connection error", error));
