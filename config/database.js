const mysql = require('mysql');
const conn = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database:"database-learn"
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
