const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3003;

// middleware
app.use(express.json());

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// mongoose error/disconnections
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// mongoose connection
mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// controllers
const skincareControllers = require("./controllers/skincare.js");
app.use("/your-skincare-routine", skincareControllers);

// listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
