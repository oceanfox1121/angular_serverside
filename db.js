var mysql = require('mysql');
function connect(){
    const connection =  mysql.createConnection({
        host :'localhost',
        user : "dac",
        database : "angular",
        password : "dac",
        port : 3306

    })
    connection.connect()
    return connection
}
module.exports = {
    connect : connect
}