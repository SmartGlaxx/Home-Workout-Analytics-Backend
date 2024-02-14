const User = require("../models/UserModel");
const HealthAssessment = require("../models/healthAssessmentModel");


const recordHealthAssessment = async (req, res) => {
  try {
    const userId = req.params.id; 

    const { systolicPressure, diastolicPressure, restingHeartRate } = req.body;

    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const healthData = {
      userId,
      date: formattedDate,
      systolicPressure,
      diastolicPressure,
      restingHeartRate,
    };

    const healthAssessment = new HealthAssessment(healthData)
    healthAssessment.save() 

    res.status(200).json({ response: "Success", healthAssessment });
  } catch (error) {
    res.status(400).json({ response: "Fail", message: "Error adding health assessment" });
  }
};

const getHealthAssessment = async (req, res) => {
  try {
    const userId = req.params.id; 

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ response: 'Fail', message: "User not found" });
    }

    const healthAssessment = await HealthAssessment.find({userId: userId})

    res.status(200).json({response: "Success", healthAssessment});
  } catch (error) {
    res.status(400).json({ response: 'Fail', message: "Error fetching Health Assessment" });
  }
};

const getWorkoutHealthAssessmentsByDate = async (req, res) => {
  try {
    const userId = req.params.id; 
    const desiredDate = req.params.date; 

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ response: 'Fail', message: "User not found" });
    }

    const workoutAssessmentsOnDate = user.workoutHealthAssessments.filter(
      assessment =>  assessment.date === desiredDate
    );

    res.status(200).json(workoutAssessmentsOnDate);
  } catch (error) {
    res.status(400).json({ response: 'Fail', message: "Error fetching Health Assessment" });
  }
};

module.exports = { recordHealthAssessment, getHealthAssessment }