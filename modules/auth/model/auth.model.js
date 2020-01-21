const database = require('../../../config/database');
const db = database.conn;
const tableName = 'user_info';
selectUser= (email,password,callback) => {
    console.log("email>>> ",email);
    console.log("password>>",password);
    const sql = `SELECT * FROM ${tableName} WHERE email='${email}' AND password=${password} `;
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