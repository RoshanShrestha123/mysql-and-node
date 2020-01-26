const mysql = require('mysql');
const conn = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database:"trello-db"
});

dbConnect=(callback) => {
    conn.connect((error,result)=>{
       if(error) throw error;
       callback();
   })
}

module.exports = {
    dbConnect,
    conn
}
