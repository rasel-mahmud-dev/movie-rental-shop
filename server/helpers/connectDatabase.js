const mysql = require('mysql2/promise');


// caching client connection

let connection = null

function connectDatabase(){
    return new Promise(async (resolve)=>{
        // create the connection
        if(!connection) {
            connection = await mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                port: '3306',
                password: "12345",
                database: 'movie-rental'
            });
        }
        // query database
        resolve(connection)
    })
}

module.exports = connectDatabase