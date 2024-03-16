const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConnect');

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue:"verma"
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    // freezeTableName: true //model == db table same
    tableName: 'users',
    timestamps: true,
    createdAt: 'create',

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: true
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = {User}