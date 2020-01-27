const express = require('express');
const todoController = require('../controller/todoList.controller');
const userController = require('../../user/controller/user.controller');
const router = express.Router();


router.use('/todo-list/:id',userController.verifyToken,todoController.showList);

module.exports = router;