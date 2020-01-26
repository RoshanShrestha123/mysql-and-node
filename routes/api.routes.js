const express = require('express');
const database = require('../config/database');
const USER = require('../modules/user/route/user.route');
const AUTH = require('../modules/auth/route/auth.route');
const BOARDS = require('../modules/Boards/route/boards.route');
const router = express.Router();
database.dbConnect(()=>{
    console.log("database connected");
})
router.use('/auth',AUTH);
router.use('/user',USER);
router.use('/boards',BOARDS);

module.exports = router;