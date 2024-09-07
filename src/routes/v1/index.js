const express = require('express');
const cityController = require('../../Controllers/City_Controller');
const airportController = require('../../Controllers/Airport_Controllers');
const airplaneController = require('../../Controllers/Airplane_Controllers');

const router = express.Router();

//City-Service
router.post('/city' , cityController.create_city);
router.delete('/city/:id' , cityController.deleat_city);
router.get('/city/:id' , cityController.get_City);
router.get('/city' , cityController.get_All_City);
router.patch('/city/:id' , cityController.update_City);

//Airport_Service
router.post('/airport' , airportController.create_airports);
router.delete('/airport/:id' , airportController.deleat_airports);
router.get('/airport/:id' , airportController.get_airports);
router.get('/airport' , airportController.get_All_airports);
router.patch('/airport/:id' , airportController.update_airports);

//Airplane_Service
router.post('/airplane' , airplaneController.create_airplane);
router.delete('/airplane/:id' , airplaneController.deleat_airplane);
router.get('/airplane/:id' , airplaneController.get_airplane);
router.get('/airplane' , airplaneController.get_All_airplane);
router.patch('/airplane/:id' , airplaneController.update_airplane);


module.exports = router; 