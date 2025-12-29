const mysql=require("mysql2/promise")
const pool=mysql.createPool({
host: "localhost",
user: "root",
password:"",
database: "schoolofcomputingdb"
})
pool.getConnection()
.then(connection=>{
console.log("School of computing database is connected");
connection.release()
})
.catch(err=>{
console.log("School of computing database is not connected");
})
module.exports=pool;