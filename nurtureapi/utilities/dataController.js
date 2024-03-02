const { connectToMongoDB } = require("./mongodb-config");
const { Assessment, Report, User } = require("../utilities/dataModels");

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

const saveAssessment = async (req, res) => {
    try {
        await connectToMongoDB();
        const report = {
            type: req.params.type,
            responses: req.body.responses,
            user: req.user.uid,
        };
        await Report.findOneAndUpdate({ uid: req.user.uid }, report, { upsert: true });
        res.status(200).end('successfully saved responses');
    } catch (error) {
        console.log(error);
        res.status(500).send("error saving assessment");
    }
}

const getProfile = async (req, res) => {
    try {
        await connectToMongoDB();
        const user = await User.findOne({ uid: req.user.uid });
        res.json(user).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("error retrieving profile");
    }
}

const updateProfile = async (req, res) => {
    try {
        await connectToMongoDB();
        await User.findOneAndUpdate({ uid: req.user.uid }, req.body.profile, { upsert: true });
        res.status(200).end('successfully updated profile');
    } catch (error) {
        console.log(error);
        res.status(500).send("error updating profile");
    }
}

module.exports = {
    getAssessment,
    saveAssessment,
    getProfile,
    updateProfile,
};