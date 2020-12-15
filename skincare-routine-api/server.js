const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3003;

// mongoose error/disconnections
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// mongoose connection
mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// controllers
const skincareControllers = require("./controllers/skincare.js");
app.use("/skincare", skincareControllers);

// listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
