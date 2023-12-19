const mongoose = require("mongoose")

const responseSchema = mongoose.Schema({
  user_id : {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },

  question_id : {
    type: mongoose.Schema.ObjectId,
    ref: 'Questions'
  },

  response: {
    type: String,
    required: true,
    trim: true
  }
})

const Response = mongoose.model("responses", responseSchema)

module.exports = { Response }