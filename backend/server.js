const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

/* Connecting to the database and then starting the server. */
mongoose
  .connect("mongodb://localhost:27017/mevn2022")
  .then(() => {
    app.listen(PORT, console.log("Server started on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });

 // const server = app.listen(PORT, console.log("Server started on port 5000"));

  //module.exports = server;