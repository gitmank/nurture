const mongoose = require("mongoose");

// connect to mongodb
const connectToMongoDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB");
    console.log(error);
  }
};

module.exports = {
  connectToMongoDB,
};
