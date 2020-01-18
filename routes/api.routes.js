const express = require('express');
const database = require('../config/database');
const USER = require('../modules/user/route/user.route');
const AUTH = require('../modules/auth/route/auth.route');
const router = express.Router();
database.dbConnect(()=>{
    console.log("database connected");
})
router.use('/auth',AUTH);
router.use('/user',USER);

module.exports = router;