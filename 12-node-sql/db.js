const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "13.201.54.126",
  user: "app_user",
  password: "AppPassword123!",
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
