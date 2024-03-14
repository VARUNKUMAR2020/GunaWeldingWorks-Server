const mongo = require("mongoose");

const CowFarm = new mongo.Schema({
  VehicleNumber: String,
  DriverName: String,
  PhoneNumber: String,
  VillageName: String,
  TotalFarmLoaded: String,
});

const CowFarms = mongo.model("Cow Farm", CowFarm);
module.exports = CowFarms;
