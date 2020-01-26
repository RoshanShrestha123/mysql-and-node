const database = require('../../../config/database');
const db = database.conn;
const table_name = 'board';

selectAllBoards= (userId,callback) => {
    const sql = `SELECT * FROM ${table_name} WHERE userId=${userId} `;
    db.query(sql,(err,result)=>{
       
        callback(err,result);
        console.log(result);
    })
}
insertNewBoard = (keys,value,callback) => {
    const sql = `INSERT INTO ${table_name} (${keys}) VALUES (${value})`;
    db.query(sql,(err,result)=>{
        callback(err,result);
    })
}
module.exports = {
    selectAllBoards,
    insertNewBoard
}
