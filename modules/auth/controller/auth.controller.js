const jwt = require('jsonwebtoken');
const authModel = require('../model/auth.model');

generateToken= (user,callback) =>{
    jwt.sign({user},'roshan',(error,token)=>{
        callback(error,token);
    })
}
login = (req,res,next) => {
    const data = req.body;
    authModel.selectUser(data.data.email,data.data.password,(err,user)=>{
        if(err != null || user.length ==0) {
            console.log(" invalid username or password");
            next(err);
        }else{
            generateToken(user,(err,token)=>{
                if(err){
                    console.log("Error ",err);
                }else{
                    console.log("Token : ", token);
                    res.send({
                        token:token
                    })
                    
                }
            }); 
        }
          
    })  
}

register = (req,res,next) => {     
    const data = req.body;
    const keys = Object.keys(data.data).join(',');
    const values = Object.values(data.data).map((value)=>{
        return `'${value}'`;
    });
    const newValues = values.join(',');
    console.log("KEYS>>",keys);
    console.log("VALUES>>",newValues);
    authModel.insertUser(keys,newValues,(err,result)=> {
        if(err!= null){
            next(err);
        }else{
            console.log(result);
            res.send({
                mesg:"user register sucessfully"
            })
        }
    })
}
module.exports = {
    login,
    register
}