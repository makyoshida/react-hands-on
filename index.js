'use strict';

const express = require("express");
const app = express();

app.use(express.static("dist"));
app.listen(3000, () => {
  console.log("Express runs on port 3000!");
});

