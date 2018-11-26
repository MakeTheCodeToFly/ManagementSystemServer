
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydatabase', 'root', '111111', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
console.log('sequelize')
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
module.exports = sequelize