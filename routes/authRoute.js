const express = require("express")
const router  = express.Router()
const {signUpUser, signInUser, signOutUser} = require("../controllers/authController")

router.post("/sign-up", signUpUser )
router.post("/sign-in", signInUser )
router.get("/sign-out", signOutUser )

module.exports = router

