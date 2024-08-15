const express = require('express');

const app = express();

const user = require('./Routes/userRoutes');


//Routes
app.use("/api/v1", user);



module.exports = app;