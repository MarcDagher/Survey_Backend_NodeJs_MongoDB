const express = require("express")
const { connectToMongoDB } = require("./configs/mongoDb.configs") // requires the connection with the DB
const app = express() // this will be our main node for the backend serve. the app will be used to configure routes, middleware, and other aspects of the web server
app.use(express.json()); // when i removed this i got "can't destruct an empty first_name"

const authRoutes = require("./routes/auth.routes") // routes for login - signup
app.use("/auth", authRoutes) // instead of giving app the entire route. we give it the router which contains them all

app.get("/hello", (request, response) => { return response.json("HELLO!!")})

app.listen(8000, () => { // starts the serve and listens on port 8000
  console.log("Server on port: " , 8000)
  connectToMongoDB()
}) // where our server will be hosted
