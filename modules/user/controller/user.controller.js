
const database = require('../../database/database');

findAll = (req,res) =>{
    console.log("waiting for the database...");
    database.selectQuery((result)=>{
        res.json(result);
        console.log("got the data..");
    });  
}

module.exports = {
    findAll
}