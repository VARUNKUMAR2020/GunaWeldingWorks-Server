const CowFarms = require("../Models/CowFarm");
const GoatFarms = require("../Models/GoatFarm");

exports.home = (req, res) => {
  res.send("Server is Ready and It is in Home Page");
};

//Adding Cow Farm
exports.addingCowFarm = async (req, res) => {
  const {
    VehicleNumber,
    DriverName,
    PhoneNUmber,
    VillageName,
    TotalFarmLoaded,
  } = req.body;
  await CowFarms.create({
    VehicleNumber,
    DriverName,
    PhoneNUmber,
    VillageName,
    TotalFarmLoaded,
  });
  res.send("added");
};

//Adding Goat Farm
exports.addingGaotFarm = async (req, res) => {
  const {
    VehicleNumber,
    DriverName,
    PhoneNUmber,
    VillageName,
    TotalFarmLoaded,
  } = req.body;
  await GoatFarms.create({
    VehicleNumber,
    DriverName,
    PhoneNUmber,
    VillageName,
    TotalFarmLoaded,
  });
  res.send("added");
};

// Search by Name
exports.searchName = async (req, res) => {
  const { VillageName } = req.body;
  const village = await GoatFarms.find({
    VillageName: { $regex: `^${VillageName}` },
  });
  const length = village.length;
  if (length) {
    res.json({ data: village, count: length });
  } else {
    res.send("No data Found");
  }
};

// Get only the Village Name
exports.getVillageNameGoat = async (req, res) => {
  try {
    const Village = await GoatFarms.distinct("VillageName");
    res.json({data:Village});
    
  } catch (error) {
    console.log(error)
  }
};

// Get only the Village Name
exports.getVillageNameCow = async (req, res) => {
  try {
    const Village = await CowFarms.distinct("VillageName");
    res.json({data:Village});
    
  } catch (error) {
    console.log(error)
  }

};

// Get all farms on Village Name
exports.getAllFarmsOnNames = async(req,res)=>{
  const{VillageName} = req.body;
  console.log("Hiii");
  console.log(VillageName)
  const farms = await GoatFarms.find({VillageName:VillageName});
  res.json(farms)
}