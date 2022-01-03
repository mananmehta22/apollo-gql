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
    var sql = `CREATE TABLE IF NOT EXISTS employees (
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL, birth_day DATE NOT NULL, 
            gender ENUM("Male", "Female") NOT NULL, 
            employee_id INT(100) AUTO_INCREMENT NOT NULL, 
            new_hire ENUM("true", "false") NOT NULL,
            PRIMARY KEY (employee_id)
            ); `;
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    con.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });
    /*var sql1 = `INSERT INTO employees (first_name, last_name,
                birth_day, gender,
                employee_id, new_hire) VALUES ?`;
                values = [
                ['Manan', 'Mehta', '1995-09-22', 'Male', '1', 'true'],
                ['Mukul', 'Jain', '1996-10-10', 'Male', '2', 'false'],
                ['Shreyaa', 'Mendhe', '1994-04-05', 'Female', '3', 'false'],
                ['Sejal', 'Thakur', '1993-05-25', 'Female', '4', 'true'],
                ['Girija', 'Iyer', '1996-02-15', 'Female', '5', 'false'],
                ]
                con.query(sql1, [values], function (err, result) {
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows);
  });*/
        /*var sql2 = "DELETE FROM employees WHERE employee_id = '1'";
        con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
  }); */
        /*var sql3 = `UPDATE employees SET first_name = 'Eshani',
        last_name = 'Sharma' birth_day = '1996-08-23,
        gender = 'Female', new_hire = 'true 'WHERE employee_id = '1'`;
        con.query(sql3, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
  });*/
  /* var sql4 = `INSERT INTO employees (first_name, last_name, 
        birth_day, gender, employee_id, new_hire) 
        VALUES ('Shivani', 'Deshpande', '1995-03-07', 'Female', '6', 'true')`;
        con.query(sql4, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
  }); */
  });
