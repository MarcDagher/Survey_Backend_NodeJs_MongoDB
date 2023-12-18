const express = require("express")
const { connectToMongoDB } = require("./configs/mongoDb.configs") // connection with the DB
const app = express() // main node for the backend server. app => configure routes, middleware, and other aspects of the web server
const cors = require('cors')

app.use(cors())
app.use(express.json()) // when i removed this i got "can't destruct an empty first_name"

// /register - /login
const authRoutes = require("./routes/auth.routes") // routes for login - signup
app.use("/auth", authRoutes) // instead of giving app the entire route. we give it the router which contains them all


// admin
const  adminRoutes  = require ("./routes/admin.routes")
const { authMiddleware } = require ("./middlewares/authMiddleware")
app.use("/admin", authMiddleware, adminRoutes)

app.listen(8000, () => { // starts the serve and listens on port 8000
  console.log("Server on port: " , 8000)
  connectToMongoDB()
}) // where our server will be hosted