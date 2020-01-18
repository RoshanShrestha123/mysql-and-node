const jwt = require('jsonwebtoken');
const authModel = require('../model/auth.model');

generateToken= (user,callback) =>{
    jwt.sign({user},'roshan',(error,token)=>{
        if(error) throw error;
        callback(token);
    })
}
login = (req,res) => {
    // const user = {
    //     id:1,
    //     firstName:"roshan"
    // }
    authModel.selectUser(1,"roshan",(user)=>{
        if(user!=null){
            generateToken(user,(token)=>{
                console.log("token displayed>>",token);
                
            });
        }else{
            console.log("no user found");
        }
        
    })
    
    
}
module.exports = {
    login
}