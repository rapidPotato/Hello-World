require("dotenv").config();

var express = require("express");
var serveStatic = require("serve-static");

const app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port);
console.log("Server started at " + port);
