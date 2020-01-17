const database = require('../../../config/database');
const tableName = "user_info";
const db= database.conn;

selectAllQuery = (callback) =>{
    const sql = `SELECT * FROM ${tableName}`;
    db.query(sql,(err,result)=>{
        if(err) throw callback(result);
        callback(result);
        console.log("data received");
    });
}

selectSpecificUser =(id,callback)=>{
    const sql = `SELECT * FROM ${tableName} WHERE id=${id}`;
    db.query(sql,(err,result)=>{
        if(err) throw callback(err);
        callback(result);
        console.log("data received");
    })
}
insertData =(keys,values,callback)=>{
    console.log("keys>> ",keys);
    console.log("Values>> ",values);
    console.log("inside the insert function ");
    // const sql =`INSERT INTO ${tableName} VALUES ('200','punnya','duwal','bhaktapur')`;
    // console.log("after query");
    // db.query(sql,(err,result)=>{
    //     console.log("inside db.query")
    //     if(err) throw callback(err);
    //     console.log(result);
    //     callback(result);
        
    // }) 
}

module.exports = {
    selectAllQuery,
    selectSpecificUser,
    insertData
}