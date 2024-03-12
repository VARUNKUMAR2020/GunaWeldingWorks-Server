const mongoose = require("mongoose");
require("dotenv").config();

const Data = () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Error in Database", err));
};

module.exports = Data;
