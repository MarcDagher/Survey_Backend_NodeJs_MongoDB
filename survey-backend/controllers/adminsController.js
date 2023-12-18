const  Survey = require("../models/survey.model")
const { Questions } = require("../models/questions.model")

const createSurvey = async (request, response) => {

  const {title} = request.body
  console.log(request.body)
  if (!title) {response.status(400).send({message: "Title must be included"})}

  try{
    const survey = new Survey({ title })
    await survey.save()
    response.status(200).send({survey})

  } catch (e) {
    response.status(500).send({error:e})
  }
}

const createQuestion = async (request, response) => {
  const {req_question, req_options, req_title} = request.body
  if (!req_question | !req_options | !req_title){
    response.status(400).send({ message: "All  fields are required" })
  } else {
    
    try{
        const survey = await Survey.findOne({title: req_title}) // check if title exists in surveys
              // const survey_id = survey._id

        if (!survey){        
          response.send("Invalid survey title")
        } else{
          const survey_id = survey._id

          const question = new Questions({question: req_question, options: req_options, survey_id})
          await question.save()
          console.log(question)
          response.status(200).send({question})
        }

    } catch (e){
      response.send("Error in create question")
    } 
  }
}

module.exports = { createSurvey, createQuestion }