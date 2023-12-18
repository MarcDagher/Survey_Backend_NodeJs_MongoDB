const express = require("express")
const { createSurvey } = require("../controllers/adminsController")
const router = express.Router()

router.post("/create_survey", createSurvey)

module.exports = router