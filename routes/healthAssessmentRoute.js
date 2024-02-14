const express = require("express")
const router  = express.Router()
const {recordHealthAssessment, getHealthAssessment} = require("../controllers/healthAssessmentController")

router.post("/:id/health-assessment", recordHealthAssessment )
router.get("/:id/health-assessment", getHealthAssessment )

module.exports = router