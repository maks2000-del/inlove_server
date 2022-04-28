
const express = require('express');
const router = express.Router();
const userController = require('../controllers/api_user_controller');


//get by id
router.get('/user/:id', userController.getUser);
//get all
router.get('/users', userController.getUsers);
//add new
router.post('/add-user', userController.createUser);
//delete by id
router.delete('/delete-user/:id', userController.deleteUser);
//update by id
router.put('/update-user/:id', userController.updateUser);


module.exports = router;