const {sequelize} = require('../config/dbConnect');
const {  DataTypes } = require('sequelize');


const UserDetails = sequelize.define('UserDetails', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  mobNumber:{
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
  freezeTableName: true
});

module.exports = {UserDetails}