const userModel = require('../model/user.model');

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
    console.log("inserting user...");
    let keys = Object.keys(req.body);
 
    let values = Object.values(req.body);
    userModel.insertData(keys,values,(result)=>{
        console.log("data inserted");
        res.json(result);
    })
}


module.exports = {
    findAllUser,
    findSpecificUser,
    insertUser
}