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
    const sql =`INSERT INTO ${tableName} (${keys}) VALUES (${values})`;
    db.query(sql,(err,result)=>{
        console.log("inside db.query")
        if(err) throw callback(err);
        callback();
        
    }) 
}

module.exports = {
    selectAllQuery,
    selectSpecificUser,
    insertData
} 