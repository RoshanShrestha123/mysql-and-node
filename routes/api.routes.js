const express = require('express');
const database = require('../modules/database/database');
const USER = require('../modules/user/route/user.route');
const route = express.Router();
database.dbConnect(()=>{
    console.log("database connected");
})

route.use('/user',USER);




module.exports = route;