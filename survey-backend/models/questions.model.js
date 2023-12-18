const mongoose = require("mongoose")
const Survey  = require("./survey.model")

const quesitionSchema = mongoose.Schema({
  question : {
    type: String,
    required: true,
    trim: true
  },

  options: {
    type: Array,
  },

  survey_id : {
    type: mongoose.Schema.ObjectId,
    ref: Survey
  }
})

const Questions = mongoose.model("Questions", quesitionSchema)

module.exports = { Questions }