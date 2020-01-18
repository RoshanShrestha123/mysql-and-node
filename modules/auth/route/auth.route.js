const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

router.use((req,res,next)=>{
    console.log("this is the auth route");
    next();
});
router.get('/login',authController.login);

module.exports = router;