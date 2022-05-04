
const express = require('express');
const router = express.Router();
const userController = require('../controllers/api_user_controller');


//get by id
router.get('/user/:id', userController.getUser);
//get by name
router.get('/user/name/:name', userController.getUserByName);
//get all
router.get('/users', userController.getUsers);
//add new
router.post('/user', userController.createUser);
//delete by id
router.delete('/user/:id', userController.deleteUser);
//update by id
router.put('/user/:id', userController.updateUser);
//authorization
router.post('/user/auth', userController.authUser);

module.exports = router;