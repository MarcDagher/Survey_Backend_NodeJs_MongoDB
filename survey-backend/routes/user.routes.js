const express = require("express")
const { displaySurveys } = require("../controllers/usersController")
const router = express.Router()

router.get("/display_surveys", displaySurveys)
router.get("/display_questions", displayQuestions)


module.exports = router 