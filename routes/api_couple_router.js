
const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/api_couple_controller');


//get by id
router.get('/couple/:id', coupleController.getCouple);
//get by one user id
router.get('/coupleById/:userId', coupleController.getCoupleByUserId);
//add new
router.post('/couple', coupleController.createCouple);
//update
router.put('/couple/:id', coupleController.updateCouple);

module.exports = router;