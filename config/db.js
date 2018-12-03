const Sequelize = require('sequelize');
const mysqlConnection = new Sequelize('mydatabase', 'root', '111111', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
mysqlConnection.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})
module.exports = mysqlConnection