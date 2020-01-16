const express = require('express');
const route = express.Router();
const userController = require('../controller/user.controller');


route.get('/getAllUser',userController.findAll);

module.exports = route;