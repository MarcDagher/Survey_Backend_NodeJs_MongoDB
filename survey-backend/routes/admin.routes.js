const express = require("express")
const { createSurvey, createQuestion } = require("../controllers/adminsController")
const router = express.Router()

router.post("/create_survey", createSurvey)
router.post("/create_question", createQuestion)

module.exports = router