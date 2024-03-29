const { connectToMongoDB } = require("./mongodb-config");
const { Assessment, Report, User, Tracking } = require("../utilities/dataModels");

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
        const report = new Report({
            type: req.params.type,
            responses: req.body.responses,
            uid: req.user.uid,
        });
        await report.save();
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
        await User.findOneAndUpdate({ uid: req.user.uid }, req.body, { upsert: true });
        res.status(200).send("successfully updated profile");
    } catch (error) {
        console.log(error);
        res.status(500).send("error updating profile");
    }
}

const getResult = async (req, res) => {
    try {
        await connectToMongoDB();
        const report = await Report.findOne({ uid: req.user.uid, type: req.params.type });
        res.json(report).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("error retrieving results");
    }
}

const updateTracking = async (req, res) => {
    try {
        await connectToMongoDB();
        await Tracking.findOneAndUpdate({ uuid: req.params.uuid }, { seen: true, stamp: new Date().getTime() });
        res.status(200).send("successfully updated tracking");
    } catch (error) {
        console.log(error);
        res.status(500).send("error updating tracking");
    }
}

const updateIP = async (req, res) => {
    try {
        await connectToMongoDB()
        await Tracking.findOneAndUpdate({ uuid: req.params.uuid }, { ip: req.headers['x-real-ip'] })
        res.status(301).redirect('https://' + req.query.callback)
    }
    catch (error) {
        console.log(error)
        res.status(500).end('error')
    }
}

module.exports = {
    getAssessment,
    saveAssessment,
    getProfile,
    updateProfile,
    getResult,
    updateTracking,
    updateIP,
};