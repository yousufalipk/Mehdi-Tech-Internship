const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


//Routes 
const user = require('./Routes/userRoutes');
const expense = require('./Routes/expenseRoutes');

app.use(express.json());
// Use body-parser
app.use(bodyParser.json()); 
// Use cookie-parser
app.use(cookieParser());

app.use('/api/v1/', user);
app.use('/api/v1/expense', expense);


module.exports = app;