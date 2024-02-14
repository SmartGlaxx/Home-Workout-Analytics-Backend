const express = require("express")
const router  = express.Router()
const { getUserProfile, saveAdditionalUserInfoById } = require("../controllers/userController")
// const { recordWorkoutHealthAssessment, getWorkoutHealthAssessmentsByDate } = require("../controllers/healthController")

router.get("/:id/profile", getUserProfile )
router.patch("/:id/profile", saveAdditionalUserInfoById)
// router.patch("/:id/health", recordWorkoutHealthAssessment)
// router.get("/:id/:date/health", getWorkoutHealthAssessmentsByDate)


module.exports = router