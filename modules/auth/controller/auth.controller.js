const jwt = require('jsonwebtoken');
const authModel = require('../model/auth.model');

generateToken= (user,callback) =>{
    jwt.sign({user},'roshan',(error,token)=>{
        if(error) throw error;
        callback(token);
    })
}
login = (req,res) => {
    authModel.selectUser(1,"roshan",(user)=>{
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