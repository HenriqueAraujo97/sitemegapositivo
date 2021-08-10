const mysql = require('mysql');
const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'megapositivobd'
});

con.connect(function(err) {
    if (err) throw err;
    con.query(`SELECT * FROM os_accounts`, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  app.post('/login') , (req, res) =>{
      const username = req.body.username;
      const password = req.body.password;

      db.query(
          "SELECT * FROM os_accounts WHERE Username = ? AND Password = ? ",
            [username, password],
            (err,result) => {

                if(err){
                res.send({err: err})
                }
                    if(result){
                        res.send(result)
                    }else{
                        res.send({message: "Utilizador ou password errada"});
                    }
                }     
      )
  };

app.listen(3001, () => {
  console.log("running server");
});