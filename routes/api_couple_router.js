
const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/api_couple_controller');


//get by id
router.get('/couple/:id', coupleController.getCouple);
//add new
router.post('/couple', coupleController.createCouple);


module.exports = router;