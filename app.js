const express = require("express");
const app = express();
const API = require("./Router/router"); 
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Data = require("./Database/db");

//Running the PORT
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("Error in the Connection");
  } else {
    console.log(`${process.env.PORT} is connected`);
  }
});

// Database Connectivity
Data();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// API Home server
app.use("/guna-welding-works", API); 
