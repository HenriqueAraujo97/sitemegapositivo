const mysql = require('mysql');
const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'megapositivobd'
});

  app.get("/" , (req, res) =>{
    const sqlInsert = "INSERT INTO os_accounts (Id, Username, Password) VALUES (5, 'henrique','henrique');"
    db.query(sqlInsert, (err, result)  =>{
      res.send("hello henrique");
    });
  });

 
  app.listen(3001, () => {
    console.log("running server");
  });