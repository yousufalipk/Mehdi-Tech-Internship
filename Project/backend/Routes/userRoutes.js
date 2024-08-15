const express = require('express');

const { testApi } = require("../Controller/userController")
const router = express.Router();

// Middleware to parse JSON request bodies if needed
router.use(express.json()); 


router.route("/test").post(testApi);

module.exports = router;