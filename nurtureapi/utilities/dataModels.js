const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid:    { type: String, required: true, unique: true },
    gender: { type: String, },
    age:    { type: String, },
    oid:    { type: String, },
});
const User = mongoose.model("User", userSchema, "users");

const responseSchema = new mongoose.Schema({
    uid:        { type: String, required: true },
    date:       { type: String, default: new Date().toString() },
    type:       { type: String, required: true },
    answers:    { type: Array },
});
const Response = mongoose.model("Response", responseSchema, 'responses');

const assessmentSchema = new mongoose.Schema({
    type:       { type: String, required: true },
    questions:  { type: Array, required: true },
    options:    { type: Array, required: true },
});
const Assessment = mongoose.model("Assessment", assessmentSchema, 'assessments');

module.exports = {
    User,
    Assessment,
    Response,
};
