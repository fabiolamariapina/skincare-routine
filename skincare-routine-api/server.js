const express = require("express");
const app = express();
const PORT = 3003;

const skincareControllers = require("./controllers/skincare.js");
app.use("/skincare", skincareControllers);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
