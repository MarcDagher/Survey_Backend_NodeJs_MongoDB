const express = require("express")
const { displaySurveys, displayQuestions, addResponse} = require("../controllers/usersController")
const router = express.Router()

router.get("/display_surveys", displaySurveys)
router.get("/display_questions", displayQuestions)
router.get("/add_response", addResponse)


module.exports = router 