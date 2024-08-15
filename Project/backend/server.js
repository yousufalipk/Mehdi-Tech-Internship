const express = require('express');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({path: "./Config/.env"});


const PORT = process.env.PORT;

//Connect to database
const connectToDB = require("./Config/db");
connectToDB();


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});


