const Survey = require("../models/survey.model")
const { Questions } = require("../models/questions.model")

const displaySurveys = async (request, response) => {
  try{
    const survey = await Survey.find()
    response.status(200).send({message: "Surveys loaded successfully", "survey": survey})
  } catch (e) {
    response.status(500).send({message: "Error"})
  }
}


displayQuestions = async (request, response) => {
  const {req_title} = request.body
  if (!req_title){
    response.status(500).send({message: "Error loading survey"})
  } else {

    try{
      
      const survey = await Survey.find({title: req_title})
      if (!survey[0]){
        response.status(500).send({message: "Error loading survey2"})
      } else {
        const questions = await Questions.find({survey_id: survey[0]._id})
        response.status(200).send({message: "Success loading survey", questions})
      }
      
    } catch (e) {
      response.status(500).send({message: "Error"})
    }

  }
}


module.exports = { displaySurveys, displayQuestions }