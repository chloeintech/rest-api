const { Sequelize } = require("sequelize")

const connection = new Sequelize(process.env.MY_SQL_URI)

connection.authenticate()

console.log("DB connection is working")

module.exports = connection