const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {};
User.init({
  name: DataTypes.STRING,        //columns
  birthday: DataTypes.DATE
},{
  sequelize,
  modelName: "user"       //table
});

module.exports = User;