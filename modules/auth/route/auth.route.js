const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

router.use((req,res,next)=>{
    console.log("this is the auth route");
    next();
});
router.post('/login',authController.login);
router.post('/register',authController.register);

module.exports = router;