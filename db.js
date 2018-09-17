var mysql = require('mysql')

var conmysql =  mysql.createConnection({
    host: 'localhost',
    user: 'soyrosar_notasad',
    password: 'admin',
    database: 'soyrosar_notas'
   
    });
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})