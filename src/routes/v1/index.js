const express = require('express');
const cityController = require('../../Controllers/City_Controller');

const router = express.Router();

router.post('/city' , cityController.create_city);
router.delete('/city/:id' , cityController.deleat_city);
router.get('/city/:id' , cityController.get_City);
router.get('/city' , cityController.get_All_City);
router.patch('/city/:id' , cityController.update_City);

module.exports = router; 