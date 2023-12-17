const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require ("bcrypt")
const { Role } = require("../models/role.model")

const register = async (request, response) => {
  const {first_name, last_name, email, password, birthday} = request.body
  if (!first_name | !last_name | !email | !password | !birthday){
    return response.status(400).send({message: "All fields are required!"})
  } 

  try {
    const roleUser = await Role.findOne({ role: "user" }) 

    const user = new User({ first_name, last_name, email, password, birthday, role_id: roleUser })

    await user.save()

    response.status(200).send({ user })

  } catch (e) {
    response.status(500).send({error: e})
  }
}


const login = async (request, response) => {
  const { email, password } = request.body

  // check if user is availabke in DB
  const user = await User.findOne({ email })
  if (!user) return response.status(400).send({ message: "Invalid username/password" })

  // check if password is correct
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) return response.status(400).send({ message: "Invalid username/password" })

  const { password: hashedPassword, _id, ...userDatails } = user.toJSON()

  // generate JWT token
  const token = jwt.sign({ ...userDatails }, 'secret_key') // payload, secret, optional: algorithm, expiresIn
  response.status(200).send({
    user: userDatails,
    token
  })
}

module.exports = { register, login }