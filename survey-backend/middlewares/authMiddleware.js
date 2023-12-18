const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const {Role} = require("../models/role.model")
const { response } = require("express")

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"] ?.split(" ")[1]

  if (!token) {
    res.status(403).send("Forbidden")
  } else {
    try {
      const decoded = jwt.verify(token, "secret_key")
      const roleID = decoded.role_id
      const role = await Role.findOne({_id:roleID,  role: "admin"})
      
      if (!role){
        res.status(403).send("Forbidden - Not an admin")
      } else{
        const user = await User.findOne({email: decoded.email}).select("-password")
        req.user = user
        next()
      }
    } catch (e) {
      res.status(500).send("Error in middleware try block")
    }
  }  
}

module.exports = {
  authMiddleware
}