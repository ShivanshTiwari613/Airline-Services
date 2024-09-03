const express = require('express');
const cityController = require('../../Controllers/City_Controller');

const router = express.Router();

router.post('/city' , cityController.create_city);

module.exports = router; 