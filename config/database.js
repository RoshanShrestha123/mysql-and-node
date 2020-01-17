const mysql = require('mysql');
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"express-learn"
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
