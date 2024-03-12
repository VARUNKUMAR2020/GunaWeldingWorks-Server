const express = require("express");
const router = express.Router();
const {
  home,
  addingCowFarm,
  addingGaotFarm,
  searchName,
  getAllFarmsOnNames,
  getVillageNameGoat,
  getVillageNameCow,
} = require("../Controller/apiController");

// API Routers
router.route("/").get(home);
router.route("/addingCowFarms").post(addingCowFarm);
router.route("/addingGoatFarms").post(addingGaotFarm);
router.route("/searchName").post(searchName);
router.route("/getVillageNameGoat").get(getVillageNameGoat);
router.route("/getVillageNameCow").get(getVillageNameCow);
router.route("/getAllFarmsOnNames").post(getAllFarmsOnNames);

module.exports = router;
