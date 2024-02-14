const mongoose = require("mongoose")

const HealthAssessmentSchema = new mongoose.Schema({
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
      },
      date: {
        type: String,
        required: true,
      },
      systolicPressure: {
        type: Number, 
        required: [true, "Please enter your systolic pressure"],
      },
      diastolicPressure: {
        type: Number, 
        required: [true, "Please enter your diastolic pressure"],
      },
      restingHeartRate: {
        type: Number, 
        required: [true, "Please enter your resting heart rate"],
      },
})


  module.exports = mongoose.model('HealthAssessment', HealthAssessmentSchema)