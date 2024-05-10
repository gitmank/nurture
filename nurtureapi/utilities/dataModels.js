const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid:    { type: String, required: true, unique: true },
    gender: { type: String, },
    age:    { type: String, },
    oid:    { type: String, },
});
const User = mongoose.model("User", userSchema, "users");

const reportSchema = new mongoose.Schema({
    uid:        { type: String, required: true },
    timestamp:  { type: Number, default: new Date().getTime() },
    type:       { type: String, required: true },
    responses:  { type: Array, required: true },
    result:     { type: String, default: "" },
});
const Report = mongoose.model("Report", reportSchema, 'reports');

const assessmentSchema = new mongoose.Schema({
    type:       { type: String, required: true },
    questions:  { type: Array, required: true },
    options:    { type: Array, required: true },
});
const Assessment = mongoose.model("Assessment", assessmentSchema, 'assessments');

const checkinSchema = new mongoose.Schema({
    uid:        { type: String, required: true },
    timestamp:  { type: Number, default: new Date().getTime() },
    value:      { type: Number, default: 0.5 },
    tag:        { type: String, default: "" },
});
const Checkin = mongoose.model("Checkin", checkinSchema, 'checkins');

module.exports = {
    User,
    Assessment,
    Report,
    Checkin,
};
