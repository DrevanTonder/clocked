const express = require("express");
const app = express();
const path = require("path");

var fs = require("fs");
if (fs.existsSync(path.join(__dirname, "dist"))) {
  //eslint-disable-next-line no-console
  console.log("help");
}
app.use(express.static(path.join(__dirname, "dist")));

app.listen(process.env.PORT || 3000);
