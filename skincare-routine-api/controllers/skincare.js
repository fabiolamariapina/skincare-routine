const express = require("express");
const skincare = express.Router();

skincare.get("/", (req, res) => {
  res.send("testing");
});

module.exports = skincare;
