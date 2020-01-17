const express = require('express');
const route = express.Router();
const userController = require('../controller/user.controller');

route.get('/getAllUser',userController.findAllUser);
route.get('/getUser/:id',userController.findSpecificUser);
route.post('/insertUser',userController.insertUser);

module.exports = route;