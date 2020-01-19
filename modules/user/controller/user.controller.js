const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

findAllUser = (req,res) => {
    userModel.selectAllQuery((result)=>{
        res.send(result);
    })
    
}

findSpecificUser = (req,res) =>{
    userModel.selectSpecificUser(req.params.id,(result)=>{
        res.send(result);
    });
}

insertUser = (req,res) => {
    let keys = Object.keys(req.body).join(',');
    let values = Object.values(req.body).map((element)=>{
        return `'${element}'`;
    });
    valueString = values.join(',');
    userModel.insertData(keys,valueString,()=>{
        console.log("data inserted");
        res.json({
            mesg: " data inserted.."
        })
    })
}

verifyToken = (req,res,next) =>{
    const bearerToken = req.headers['authorization'];
    console.log("token from header>> ",bearerToken);
    if(bearerToken== undefined){
        console.log("bearer token undefined");
        res.send({meg:"no token found"})
    }else{
        const tokenHeader = bearerToken.split(' ');
        const token = tokenHeader[1];
        console.log("actual token >> ", token);
        jwt.verify(token,'roshan',(err,result)=>{
        if(err) throw err;
        console.log("token is verfied..");
        next();
    });
    }
    
}


module.exports = {
    findAllUser,
    findSpecificUser,
    insertUser,
    verifyToken
}