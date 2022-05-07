
const express = require('express');
const router = express.Router();
const dateController = require('../controllers//api_date_controller');


//get by id
router.get('/date/:id', dateController.getDate);
//get all
router.get('/dates/:coupleId', dateController.getDates);
//add new
router.post('/date', dateController.createDate);
//delete by id
router.delete('/date/:id', dateController.deleteDate);
//update by id
router.put('/date/:id', dateController.updateDate);


module.exports = router;