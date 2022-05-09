
const express = require('express');
const router = express.Router();
const complimentController = require('../controllers/api_compliment_controller');


//get by id
router.get('/compliment/:id', complimentController.getCompliment);
//get by id
router.get('/compliment/couple/:id.:date.:recipent', complimentController.getComplimentByCoupleId);
//add new
router.post('/compliment', complimentController.createCompliment);


module.exports = router;