const jwt = require('jsonwebtoken');
const authModel = require('../model/auth.model');

generateToken= (user,callback) =>{
    jwt.sign({user},'roshan',(error,token)=>{
        if(error) throw error;
        callback(token);
    })
}
login = (req,res) => {
    console.log(req.body);
    const data = req.body;
    authModel.selectUser(data.data.email,data.data.password,(user)=>{
        if(user!=null){
            generateToken(user,(token)=>{
                res.json({
                    token:token
                })              
            });
        }else{
            console.log("no user found");
        } 
    })  
}
module.exports = {
    login
}