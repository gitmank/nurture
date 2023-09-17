import mongoose, { mongo } from "mongoose";

export const connectToMongoDB = async () => await mongoose.connect(process.env.MONGO_URI)
.then(() => { console.log("successfully connected to MongoDB") })
.catch((err) => { console.log(err) });