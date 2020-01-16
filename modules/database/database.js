const mysql = require('mysql');
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"express-learn"
});

dbConnect=(callback) => {
    console.log("inside db code");
    conn.connect((error,result)=>{
       if(error) throw error;
       callback();
   })
}

selectQuery = (callback) => {
    const sql = "SELECT * FROM user_info";
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        callback(result);
    });

}

insertQuery = () => {

}

deleteQuery = () => {

}
updateQuery = () => {

}

module.exports = {
    dbConnect,
    selectQuery
}
