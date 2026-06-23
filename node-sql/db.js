const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "test_user",
  password: "TestPassword123!",
  database: "test_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Connection failed:", err);
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = connection;
