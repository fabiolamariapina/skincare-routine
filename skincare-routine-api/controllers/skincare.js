const express = require("express");
const skincare = express.Router();
const Skincare = require("../models/skincare.js");

// Routes
// index
skincare.get("/", (req, res) => {
  res.send("testing");
});
// create
skincare.post("/", async (req, res) => {
  Skincare.create(req.body, (error, createdSkincare) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdSkincare);
  });
});

module.exports = skincare;
