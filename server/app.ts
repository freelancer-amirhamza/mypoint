const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();


app.use(cors({
    credentials:true,
    origin:process.env.CLIENT_ULR
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));





module.exports = app