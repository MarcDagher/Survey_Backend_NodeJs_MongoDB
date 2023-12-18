const mongoose = require("mongoose")
const { Survey }= require("../models/survey.model")

const createSurvey = async (request, response) => {

  // const {title} = request.body

  // if (!title) {return response.status(400).send({message: "Title must be included"})}

  // try{
  //   const survey = new Survey({ title })
  //   await survey.save()
  //   response.status(200).send({survey})

  // } catch (e) {
  //   response.status(500).send({error:e})
  // }
}

module.exports = { createSurvey }