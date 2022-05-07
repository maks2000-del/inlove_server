
const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/api_memory_controller');


//get by id
router.get('/memory/:id', memoryController.getMemory);
//get all
router.get('/memorys/:coupleId', memoryController.getMemorys);
//add new
router.post('/memory', memoryController.createMemory);
//delete by id
router.delete('/memory/:id', memoryController.deleteMemory);
//update by id
router.put('/memory/:id', memoryController.updateMemory);


module.exports = router;