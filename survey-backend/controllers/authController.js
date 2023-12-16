const User = require("../models/user.model")
const bcrypt = require ("bcrypt")

const register = async (request, response) => {
  const {first_name, last_name, email, password, birthday} = request.body
  console.log(request.body)
  if (!first_name | !last_name | !email | !password | !birthday){
    return response.status(400).send({message: "All fields are required!"})
  } 

  try {
    const user =  new User({ first_name, last_name, email, password, birthday })

    await user.save()

    response.status(200).send({ user })

  } catch (e) {
    response.status(500).send({error: e})
  }
}

module.exports = { register }