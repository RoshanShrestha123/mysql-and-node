const express = require('express');
const route = express.Router();
const userController = require('../controller/user.controller');

route.get('/getAllUser',userController.verifyToken,userController.findAllUser);
route.get('/getUser/:id',userController.verifyToken,userController.findSpecificUser);
route.post('/insertUser',userController.verifyToken,userController.insertUser);

module.exports = route;