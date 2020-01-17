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


module.exports = {
    findAllUser,
    findSpecificUser,
    insertUser
}