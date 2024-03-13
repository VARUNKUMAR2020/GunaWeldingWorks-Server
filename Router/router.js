const express = require("express");
const router = express.Router();
const {
  home,
  addingCowFarm,
  addingGaotFarm,
  searchVillageNameGoatFarm,
  getAllFarmsOnNames,
  getVillageNameGoat,
  getVillageNameCow,
  searchVillageNameCowFarm,
} = require("../Controller/apiController");

// API Routers
router.route("/").get(home);
router.route("/addingCowFarms").post(addingCowFarm);
router.route("/addingGoatFarms").post(addingGaotFarm);
router.route("/searchVillageNameGoatFarm").post(searchVillageNameGoatFarm );
router.route("/searchVillageNameCowFarm").post(searchVillageNameCowFarm)
router.route("/getVillageNameGoat").get(getVillageNameGoat);
router.route("/getVillageNameCow").get(getVillageNameCow);
router.route("/getAllFarmsOnNames").post(getAllFarmsOnNames);

module.exports = router;
