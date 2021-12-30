const mysql = require("mysql");
const { employees } = require("./EmployeeData");
const dotenv = require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /* var sql = `CREATE TABLE employees (first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50), birth_day DATE NOT NULL, 
            gender ENUM('Male','Female') NOT NULL, 
            employee_id INT AUTO_INCREMENT NOT NULL, new_hire BOOLEAN NOT NULL,
            PRIMARY KEY (employee_id)); `;
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    }); */
    var sql1 = `INSERT INTO customers (first_name, last_name, 
            birth_day, gender, 
            employee_id, new_hire) VALUES ?`;
            con.query(sql1, employees, function (err, result) {
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows);
  });
  });

