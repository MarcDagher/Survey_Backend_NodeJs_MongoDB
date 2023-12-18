const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema({

  title : {
    type: String,
    require: true,
    trim: true
  },

})

const Survey = mongoose.model("Survey", surveySchema)

module.exports = Survey