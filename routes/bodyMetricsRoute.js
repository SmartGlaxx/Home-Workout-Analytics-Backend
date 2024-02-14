const express = require("express")
const router  = express.Router()
const {recordBodyMetrics} = require("../controllers/bodyMetricsController")

router.post("/:id/body-metrics", recordBodyMetrics )

module.exports = router