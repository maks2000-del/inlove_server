
const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/api_couple_controller');


//get by id
router.get('/user/:id', coupleController.getCouple);
//add new
router.post('/user', coupleController.createCouple);


module.exports = router;