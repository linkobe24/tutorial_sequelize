const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {};
User.init({
    
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull: {
        msg: "name field cannot be empty"
      },
      isAlpha: {
        args: true,
        msg: "Name only accepts letters"
      },
      len:{
        args: [3, 255],
        msg: "name must be between 3-255 characters"
      }

    }
  }, 
  
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: "Must be a valid e-mail"
      }
    }
  },
  
  age: {
    type: DataTypes.INTEGER,
    validate: {
      isInt: {
        args: true,
        msg: "Age must be an integer"
      },
      min:{
        args: 1,
        msg: "Age must be equal or greater than 1"
      },
      max:{
        args: 150,
        msg: "Age must be real"
      }
    }
  },
  
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0
    }
},{
    sequelize,
    modelName: "users"
});

module.exports = User;