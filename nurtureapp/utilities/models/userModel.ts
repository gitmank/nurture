import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name:           { type: String },
    regNum:         { type: String },
    email:          { type: String },
    slots:          { type: [String] },
    phone:          { type: String },
    uuid:           { type: String },
})

const User = models.User || model('User', userSchema, 'users')

export default User