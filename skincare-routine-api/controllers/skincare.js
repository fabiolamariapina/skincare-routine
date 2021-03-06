const express = require("express");
const skincare = express.Router();
const Skincare = require("../models/skincare.js");

// Routes
// index
skincare.get("/", (req, res) => {
  Skincare.find({}, (err, foundSkincare) => {
    if (err) {
      res.status(400).json({ error: foundSkincare });
    }
    res.status(200).json(foundSkincare);
  });
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
// update
skincare.put("/:id", (req, res) => {
  Skincare.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedSkincare) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedSkincare);
    }
  );
});
// delete
skincare.delete("/:id", (req, res) => {
  Skincare.findByIdAndRemove(req.params.id, (err, deletedSkincare) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedSkincare);
  });
});

module.exports = skincare;
