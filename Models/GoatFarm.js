const mongo = require("mongoose");

const GoatFarm = new mongo.Schema({
  VehicleNumber: String,
  DriverName: String,
  PhoneNUmber: String,
  VillageName: String,
  TotalFarmLoaded: String,
});

const GoatFarms = mongo.model("Goat Farm", GoatFarm);
module.exports = GoatFarms;