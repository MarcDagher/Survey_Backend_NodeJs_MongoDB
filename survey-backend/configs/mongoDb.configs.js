const mongoose = require("mongoose"); // Mongoose provides a simple, schema-based solution for modeling and interacting with databases.

const connectToMongoDB = () => {
  mongoose.connect("mongodb://localhost:27017/survey");
  const connection = mongoose.connection

  connection.on("error", (error) => {console.log("Error connecting: ", error)}) // event handler which handles the error in connection

  connection.once("open", () => { // event handler once the connection with MongoDB is established
    console.log("Connected to MongoDB ...")
  })
};

module.exports = { connectToMongoDB }