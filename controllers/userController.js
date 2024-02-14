const User = require("../models/UserModel")

const getUserProfile = async (req, res) => {
    try {
      const userId = req.params.id
      const user = await User.findById(userId);

      const userData = {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        age: user.age,
        gender: user.gender,
        height: user.height,
        weight: user.weight,
        medicalHistory: user.medicalHistory,
        fitnessLevel: user.fitnessLevel,
        fitnessGoals: user.fitnessGoals,
        workoutHealthAssessments : user.workoutHealthAssessments 
      }
      res.status(200).json({response: "Success", userData});
    } catch (error) {
      res.status(404).json({ response: 'Fail', message: "User not found" });
    }
  };



  const saveAdditionalUserInfoById = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const { age, gender, height, weight, medicalHistory, fitnessLevel, fitnessGoals } = req.body;

      const user = await User.findByIdAndUpdate(
        userId,
        {
          age,
          gender,
          height,
          weight,
          medicalHistory,
          fitnessLevel,
          fitnessGoals
        },
        { new: true } 
      );
  
      res.status(200).json({ response: 'Success', user });
    } catch (error) {
      console.error(error);
      res.status(404).json({ response: 'Fail', message: "User not found" });
    }
  };


  module.exports = { getUserProfile, saveAdditionalUserInfoById }
  