const mysql = require("mysql");

// MySQL connection config
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "freshnest",
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

module.exports = connection;
