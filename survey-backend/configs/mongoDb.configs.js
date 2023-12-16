// const {default: mongoose} = require("mongoose");
const mongoose = require("mongoose");

const connectToMongoDB = () => {
  mongoose.connect("mongodb://localhost:27017");
  const connection = mongoose.connection

  connection.on("error", (error) => {console.log("Error connecting: ", error)})

  connection.once("open", () => {
    console.log("Connected to MongoDB ...")
  })
};

module.exports = { connectToMongoDB }