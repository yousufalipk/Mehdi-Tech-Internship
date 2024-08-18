const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const cookieParser = require('cookie-parser');

const connectToDb = require('./Config/connection');



const app = require ('./app');

app.use(cookieParser());

//CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000/', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
};

app.use(cors(corsOptions));

//Configuring dotenv
dotenv.config({path: './env'});

//Db Connection
connectToDb();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async ()=> {
    console.log(`Server is running on port ${PORT}`)
})