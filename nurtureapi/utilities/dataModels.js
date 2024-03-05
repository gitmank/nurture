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
    date:       { type: String, default: Date.now() },
    type:       { type: String, required: true },
    responses:  { type: Array, required: true },
    result:     { type: String, default: "" },
    isPending:  { type: Boolean, default: false },
});
const Report = mongoose.model("Report", reportSchema, 'reports');

const assessmentSchema = new mongoose.Schema({
    type:       { type: String, required: true },
    questions:  { type: Array, required: true },
    options:    { type: Array, required: true },
});
const Assessment = mongoose.model("Assessment", assessmentSchema, 'assessments');

module.exports = {
    User,
    Assessment,
    Report,
};
