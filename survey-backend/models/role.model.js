const mongoose = require("mongoose")

const rolesSchema = new mongoose.Schema({
  role : {
    type: String,
    required : true,
    unique : true,
    trim: true
  }
})

const Role = mongoose.model("Roles", rolesSchema)

const createRole = async () => { // I did this just to insert default roles from here. Could have done it from mongoDB Compass
  try {
    
    // chack if types already exist
    const adminRole = await Role.find({ role: "admin" } )
    const userRole = await Role.find({ role: "user" } )

    if (!adminRole[0]){
      console.log(adminRole)
      console.log("Admin created successfuly")
      await Role.create({ role: "admin" })
    } 
    
    if (!userRole[0]){
      console.log(userRole)
      console.log("User created successfuly")
      await Role.create({ role: "user" })
    }

    
  } catch (error) {
    console.log("Error creating role ", error )
  }
}

module.exports = { Role, createRole }