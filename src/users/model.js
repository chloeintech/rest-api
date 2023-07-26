const { DataTypes } = require("sequelize")
const connection = require("../db/connection")


const User = connection.define("User", { // do not pluralise
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},

    { indexes: [{ unique: true, fields: ["username", "email"] }] }

)

module.exports = User