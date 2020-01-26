const database = require('../../../config/database');
const db = database.conn;
const tableName = 'user_info';
selectUser= (email,password,callback) => {
    const sql = `SELECT * FROM ${tableName} WHERE email='${email}' AND password='${password}' `;
    db.query(sql,(err,result)=>{
        
        callback(err,result);        
    })
}

insertUser= (keys,values,callback) => {
    const sql = `INSERT INTO ${tableName} (${keys}) VALUES (${values})`;
    db.query(sql,(err,result)=>{
        callback(err,result);
    })
}
module.exports = {
    selectUser,
    insertUser
}