const express = require("express");
const mysql = require("mysql2");

require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = 3000;

app.post("/employees", (req, res) => {
  const { first_name, last_name } = req.body;

  const sql = "INSERT INTO employees(first_name,last_name) VALUES (?, ?)";

  db.query(sql, [first_name, last_name], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Employee created",
      id: result.insertId,
    });
  });
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM employees WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results[0]);
  });
});

app.put("/employees/:id", (req, res) => {
  const id = req.params.id;

  const { first_name, last_name } = req.body;

  db.query(
    "UPDATE employees SET first_name=?, last_name=? WHERE id=?",
    [first_name, last_name, id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Employee updated",
      });
    },
  );
});

app.delete("/employees/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM employees WHERE id=?", [id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Employee deleted",
    });
  });
});

const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
connection.connect((err) => {
  if (err) {
    console.error("Connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
