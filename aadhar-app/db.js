const mysql = require("mysql2/promise");
const env = require("./env.json");


const pool = mysql.createPool({
    host:env.DB_HOST,
    user:env.DB_USER,
    password:env.DB_PASSWORD,
    database:env.DB_NAME,
    connectionLimit:100,
    waitForConnections:true,
    queueLimit:0,
});

//To test connection
// async function test() {
// try{

//     const connect_db = await pool.getConnection();
//     console.log("Connection successfull!");
   

// } catch(error){
//     console.error("Connection failed!",error.message);
//     throw error
// }
// }

// test();




module.exports = pool 
