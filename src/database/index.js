const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://mongo:mongo@localhost:27017/?authMechanism=DEFAULT", {
      authSource: "admin",
      auth: {
        username: "mongo",
        password: "mongo",
      },
    });
    console.log("Database connected");
  } catch (err) {
    console.error("Error connecting to Database: ", err);
  }
};

module.exports = connection;
