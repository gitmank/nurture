const { connectToMongoDB } = require("./mongodb-config");
const { Assessment } = require("../utilities/dataModels");

const getAssessment = async (req, res) => {
    const type = req.params.type;
    try {
        await connectToMongoDB()
        const assessment = await Assessment.findOne({ type });
        res.json(assessment).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving assessment");
    }
}

module.exports = {
    getAssessment,
};