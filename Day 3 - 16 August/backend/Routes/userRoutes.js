const express = require('express');
const router = express.Router();

const auth = require('../Middleware/auth');

const {  
    createUser,
    loginUser,
    logOutUser,
    refresh
} = require('../Controller/userController');

//Create User
router.route('/create-user').post(createUser);

//Login User
router.route('/login-user').post(loginUser);

//Log Out user
router.post('/logout-user', auth, logOutUser);


//Refresh page
router.route('/refresh').get(refresh);

module.exports = router;

