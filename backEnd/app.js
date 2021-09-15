const express = require("express");
const app = express();
const api = require("./CovidApp");
const morgan = require("morgan"); //logger
const bodyParser = require("body-parser");
const cors = require("cors");

// app.get('/', function(req, res){

//   });

app.set("port", process.env.PORT || 8008);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use("/api", api);
app.use(express.static("static"));

app.use(morgan("dev"));

// This disables the `contentSecurityPolicy` middleware but keeps the rest.
// app.use(
//     helmet({
//       contentSecurityPolicy: false,
//     })
//   );

//if not then 404  error code
app.use(function (req, res) {
  const err = new Error("Not Found");
  err.status = 404;
  res.json(err);
});

//Database connection

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CovidData", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
  // connection.query('SELECT * FROM orders WHERE id = ' + id, function (error, results, fields) {
  //     if (error) throw error;
  //     // ...
  //   });

  app.listen(app.get("port"), function () {
    console.log("API Server Listening on port " + app.get("port") + "!");
  });
});
