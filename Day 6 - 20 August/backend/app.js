const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const user = require ('./Routes/userRoutes');

const app = express();

// Middleware setup
// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.json()); 
app.use(cookieParser());    

// Test route
app.get('/', (req, res) => {
    res.send('Server Runs Correctly');
});

app.use('/api/v1', user);


module.exports = app;
