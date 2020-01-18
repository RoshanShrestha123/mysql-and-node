const database = require('../../../config/database');
const db = database.conn;
const tableName = 'user_info';
selectUser= (id,password,callback) => {
    const sql = `SELECT * FROM ${tableName} WHERE id=${id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("user>> ",result);
        if(result == ''){
            console.log("when empty> ",result);
            callback(null);
        }else{
            callback(result);
        }
        
    })
}
module.exports = {
    selectUser
}