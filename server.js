require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My route
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// Initialize DB
require('./config/db-connect')();

//Middelware
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());

//Myroutes
app.use("/news", authRoutes );
app.use("/news", userRoutes );


/**
 * define port
 * */
 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
   console.log('Server is running on port : ' + PORT);
 });