const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/bookknight";

async function connectDb() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`Connected to Database:: ${mongoURI}`);
  } catch (error) {
    console.log(`Connect Failed:: ${error.message}`);
  }
}

module.exports = connectDb;
