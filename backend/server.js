import express from "express";
import dotenv from "dotenv";
//import DBconnect from './DBconnect.js';
// import colors from "colors";
import config from "./dbconfig.js";
import sql from "mssql/msnodesqlv8.js";

dotenv.config();
const app = express();

app.get("/", function (req, res) {
  res.send("API is running...");
});

app.get("/api/courses", function (req, res) {
  sql
    .connect(config)
    .then(() => {
      var request = new sql.Request();
      request.query(`SELECT * FROM COURSE`, (err, result) => {
        res.send(result.recordset);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/api/course/:id", function (req, res) {
  sql
    .connect(config)
    .then(() => {
      var request = new sql.Request();
      request.query(
        `SELECT * FROM COURSE WHERE Course_ID = ${req.params.id}`,
        (err, result) => {
          res.send(result.recordset);
        }
      );
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("http://localhost:3001/api/course/insert", function (req, res) {
  sql
    .connect(config)
    .then(() => {
      var request = new sql.Request();
      const items = req.body.item;
      console.log(items);
      request.query(`INSERT INTO COURSE VALUES (${items.Course_ID}, ${items.Course_name}, ${items.SPECIALIZATION},
            ${items.Level}, ${items.Description}, ${items.Fee}, ${items.Admin_ID})`);
    })
    .catch(function (err) {
      console.log(err);
    });
});

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `express server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    // .yellow.bold
  )
);
