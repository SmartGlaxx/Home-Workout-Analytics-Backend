const User = require("../models/UserModel");
const BodyMetrics = require("../models/bodyMetricsModel");


const recordBodyMetrics = async (req, res) => {
  try {
    const userId = req.params.id; 

    const {chestCircumference, waistCircumference, hipCircumference} = req.body;

    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const metrics = {
      userId,
      date: formattedDate,
      chestCircumference,
      waistCircumference,
      hipCircumference,
    };

    const bodyMetrics = new BodyMetrics(metrics)
    bodyMetrics.save() 

    res.status(200).json({ response: "Success", bodyMetrics });
  } catch (error) {
    res.status(400).json({ response: "Fail", message: "Error adding body metrics" });
  }
};


module.exports = { recordBodyMetrics }