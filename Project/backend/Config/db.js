const mongoose = require ('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './Config/.env'});

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const connectToDB = () => {
    mongoose
    .connect(MONGO_DB_URI)
    .then((val) => {
        console.log("Database Connected Sucessfuly!");
    })
    .catch((val) => {
        console.log("Databased Connection Faliure!");
    })
}

module.exports = connectToDB;

