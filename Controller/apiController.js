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
    PhoneNumber,
    VillageName,
    TotalFarmLoaded,
  } = req.body;
  await CowFarms.create({
    VehicleNumber,
    DriverName,
    PhoneNumber,
    VillageName,
    TotalFarmLoaded,
  });
  res.send("கொட்டகை சேர்க்கப்பட்டது");
};

//Adding Goat Farm
exports.addingGaotFarm = async (req, res) => {
  const {
    VehicleNumber,
    DriverName,
    PhoneNumber,
    VillageName,
    TotalFarmLoaded,
  } = req.body;
  await GoatFarms.create({
    VehicleNumber,
    DriverName,
    PhoneNumber,
    VillageName,
    TotalFarmLoaded,
  });
  res.send("கொட்டகை சேர்க்கப்பட்டது");
};

// Search by Village Name Goat Farm
exports.searchVillageNameGoatFarm = async (req, res) => {
  let farmCount = 0;
  const { Village } = req.body;
  if (Village === "அனைத்து") {
    const village = await GoatFarms.find({});
    village.map((value) => {
      farmCount += Number(value.TotalFarmLoaded);
    });
    res.json({ data: village, count: farmCount });
  } else {
    const village = await GoatFarms.find({
      VillageName: Village,
    });
    village.map((count) => {
      farmCount += Number(count.TotalFarmLoaded);
    });
    res.json({ data: village, count: farmCount });
  }
};

// Search by Village Name Cow Farm
exports.searchVillageNameCowFarm = async (req, res) => {
  let farmCount = 0;
  const { Village } = req.body;
  if (Village === "அனைத்து") {
    const village = await CowFarms.find({});
    village.map((value) => {
      farmCount += Number(value.TotalFarmLoaded);
    });
    res.json({ data: village, count: farmCount });
  } else {
    const village = await CowFarms.find({
      VillageName: Village,
    });
    village.map((count) => {
      farmCount += Number(count.TotalFarmLoaded);
    });
    res.json({ data: village, count: farmCount });
  }
};

// Get only the Village Name
exports.getVillageNameGoat = async (req, res) => {
  try {
    const Village = await GoatFarms.distinct("VillageName");
    res.json({ data: Village });
  } catch (error) {
    console.log(error);
  }
};

// Get only the Village Name
exports.getVillageNameCow = async (req, res) => {
  try {
    const Village = await CowFarms.distinct("VillageName");
    res.json({ data: Village });
  } catch (error) {
    console.log(error);
  }
};

// Get all farms on Village Name
exports.getAllFarmsOnNames = async (req, res) => {
  const { VillageName } = req.body;
  const farms = await GoatFarms.find({ VillageName: VillageName });
  res.json(farms);
};
