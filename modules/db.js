let mysql = require('mysql')
const db_config = {
  host: 'localhost',
  password: '111111',
  user: 'root',
  port: '3306',
  database: 'mydatabase'
}

let connect = mysql.createConnection(db_config)

connect.connect(function(err) {
  if (err) {
    console.log(`mysql连接失败：${err}`)
  } else {
    console.log('mysql连接成功！')
  }
})

module.exports = connect