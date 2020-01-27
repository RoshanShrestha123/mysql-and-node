const express = require('express');
const database = require('../config/database');
const USER = require('../modules/user/route/user.route');
const AUTH = require('../modules/auth/route/auth.route');
const BOARDS = require('../modules/Boards/route/boards.route');
const TODO_LIST = require('../modules/todoList/route/todoList.route');
const router = express.Router();
database.dbConnect(()=>{
    console.log("database connected");
})
router.use('/auth',AUTH);
router.use('/user',USER);
router.use('/boards',BOARDS);
router.use('/list/',TODO_LIST);

module.exports = router;