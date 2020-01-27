const database = require('../../../config/database');
const db = database.conn;
const table_name = 'todo_list';

selectList = (userId,id,callback) => {
    
    console.log(" i am at the select list atleast")
    const sql = `SELECT * FROM ${table_name} WHERE board_id=${id} `;
    db.query(sql,(err,result)=>{
        console.log('Error to select list>> ',err);
        callback(err,result);
    })
}

insertList = (keys,values, callback)=> {
    const sql =  `INSERT INTO ${table_name} (${keys} VALUES (${values}))`;
    db.query(sql,(err,result)=>{
        callback(err,result);
    })
}

module.exports = {
    selectList,
    insertList
}