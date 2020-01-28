const express = require('express');
const Router = express.Router();
const userController = require('../../user/controller/user.controller');
const boardsController = require('../controller/boards.controller');

Router.use('/showBoards',userController.verifyToken,boardsController.showBoards);
Router.use('/addBoard',userController.verifyToken,boardsController.insertBoards);
 

module.exports = Router;