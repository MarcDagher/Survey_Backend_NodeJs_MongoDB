const Survey = require("../models/survey.model")
const { Questions } = require("../models/questions.model")
const User = require("../models/user.model")
const { Response } = require("../models/response.model")
const jwt = require("jsonwebtoken")

const displaySurveys = async (request, response) => {
  try{
    const survey = await Survey.find()
    response.status(200).send({message: "Surveys loaded successfully", "survey": survey})
  } catch (e) {
    response.status(500).send({message: "Error"})
  }
}


const displayQuestions = async (request, response) => {
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
        console.log(questions)
        response.status(200).send({message: "Success loading survey", questions})
      }
      
    } catch (e) {
      response.status(500).send({message: "Error"})
    }

  }
}


// to refactor: check if answer exists among the options
const addResponse = async (request, response) => {
  const token = request.headers["authorization"] ?.split(" ")[1]
  const decoded = jwt.verify(token, 'secret_key')
  
  // user_id from the token
  const user_email = decoded.email 
  const user = await User.findOne({email: user_email})
  
  // survey_question: input is the string quesion - answer is simply the answer 
  const { survey_question, answer } = request.body
  const question = await Questions.findOne({question: survey_question}) // to get the object id of the question. for now ill just send in the question

  if (!question | !answer){
    response.status(500).send({ message: "Please select an answer" })
  } else {
    const user_response = new Response({user_id: user._id, question_id:  question._id, response: answer})
    await user_response.save()
    response.status(200).send(user_response)
  }
}

module.exports = { displaySurveys, displayQuestions, addResponse }