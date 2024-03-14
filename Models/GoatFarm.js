const mongo = require("mongoose");

const GoatFarm = new mongo.Schema({
  VehicleNumber: String,
  DriverName: String,
  PhoneNumber: String,
  VillageName: String,
  TotalFarmLoaded: String,
});

const GoatFarms = mongo.model("Goat Farm", GoatFarm);
module.exports = GoatFarms;