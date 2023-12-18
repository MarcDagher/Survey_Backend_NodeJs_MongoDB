const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema({

  title : {
    type: String,
    required: true,
    trim: true
  },

})

const Survey = mongoose.model("surveys", surveySchema)

module.exports = Survey