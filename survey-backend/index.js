const express = require("express")
const { connectToMongoDB } = require("./configs/mongoDb.configs") // requires the connection with the DB
const app = express() // main node for the backend server. the app will be used to configure routes, middleware, and other aspects of the web server
const { createRole } = require("./models/role.model")
app.use(express.json()); // when i removed this i got "can't destruct an empty first_name"

const authRoutes = require("./routes/auth.routes") // routes for login - signup
app.use("/auth", authRoutes) // instead of giving app the entire route. we give it the router which contains them all

app.listen(8000, () => { // starts the serve and listens on port 8000
  console.log("Server on port: " , 8000)
  connectToMongoDB()
}) // where our server will be hosted
