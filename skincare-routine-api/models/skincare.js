const mongoose = require("mongoose");

const skincareSchema = mongoose.Schema({
  productType: { type: String, required: true },
  productName: { type: String, required: true },
  image: String,
  timeOfDay: String,
  skinConcerns: [{ type: String }],
});

module.exports = mongoose.model("Skincare", skincareSchema);
