// Set up connection to mySQL
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exports for ORM
module.exports = connection;



// Export routes for server.js to use.
module.exports = router;


// exports for server.js
module.exports = router;