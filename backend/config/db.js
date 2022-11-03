const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
      mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); 

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
