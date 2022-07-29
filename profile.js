const express = require("express");
const app = express();
const fs = require("fs");
require("dotenv").config();

app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.use(express.static("public"));

const cors = require("cors");
const { emitWarning } = require("process");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/api", cors(), (req, res) => {
  fs.readFile("./models/profile.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error on reading");
    } else {
      res.send(JSON.parse(data));
    }
  });
});
app.listen(3000);
