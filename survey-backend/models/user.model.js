const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    first_name : {
      type : String,
      required : true,
      minlength: 3,
      maxlength: 30,
      trim: true
    },

    last_name : {type : String,
      required : true,
      minlength: 3,
      maxlength: 30,
      trim: true
    },

    email : {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },

    password : {
      type: String,
      required: true,
      minlength: 6
    },

    image : { type: String }, // file path or url

    birthday : { type: Date, required: true },

    // completed_surveys: [{type: mongoose.Schema.Types.ObjectId, ref:Surveys}], // each value in the array is a foreign key to a survey
    
    role_id : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roles' // references the Roles model
    }
})

userSchema.pre("save", async function (next) { // pre-save is a middleware executed before saving a document to the database
  try {
    const salt = await bcrypt.genSalt(10) // generate salt
    this.password = await bcrypt.hash(this.password, salt) // hash with salt
    next() // moves on to the next middleware or the saving process
  } catch (error) {
    console.log(error)
    next(error)
  }
})

const User = mongoose.model("User", userSchema)
module.exports = User