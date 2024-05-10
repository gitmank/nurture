const { connectToMongoDB } = require("./mongodb-config");
const { Assessment, Report, User, Tracking, Checkin } = require("../utilities/dataModels");

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
            timestamp: new Date().getTime(),
        });
        await report.save();
        fetch(`https://nurtureml.manomay.co/evaluate/${req.params.type}`);
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
        const report = await Report.find({ uid: req.user.uid, type: req.params.type }).sort({ timestamp: -1 }).limit(1);
        res.json(report).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("error retrieving results");
    }
}

const saveCheckin = async (req, res) => {
    try {
        await connectToMongoDB();
        const checkin = new Checkin({
            uid: req.user.uid,
            timestamp: new Date().getTime(),
            value: req.body.value,
            tag: req.body.tag,
        });
        await checkin.save();
        res.status(200).end('successfully saved checkin');
    } catch (error) {
        console.log(error);
        res.status(500).send("error saving checkin");
    }
}

const getCheckin = async (req, res) => {
    try {
        await connectToMongoDB();
        const checkins = await Checkin.find({ uid: req.user.uid }).sort({ timestamp: -1 }).limit(7);
        res.json(checkins).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("error retrieving checkins");
    }
}

module.exports = {
    getAssessment,
    saveAssessment,
    getProfile,
    updateProfile,
    getResult,
    saveCheckin,
    getCheckin,
};