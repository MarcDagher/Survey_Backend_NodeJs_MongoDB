const express = require("express")
const { connectToMongoDB } = require("./configs/mongoDb.configs")
const app = express() // this will be our main node for the backend serve

app.listen(8000, () => {
  console.log("Server on port: " , 8000)
  connectToMongoDB()
}) // where our server will be hoseted
