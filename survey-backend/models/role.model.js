const mongoose = require("mongoose")

const rolesSchema = new mpngoose.Schema({
  role : {
    type: string,
    required : true,
    unique : true,
    trim: true
  }
})

const Role = mongoose.model("Roles", rolesSchema)
module.exports = Role