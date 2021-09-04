const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// const sequelize = new Sequelize('sqlite::memory:'); 

const Category = sequelize.define('Category', {
  // Model attributes are defined here
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentCategory: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  categoryUrl: { 
    type: DataTypes.STRING   
    // allowNull defaults to true
  }  
}, {
  // Other model options go here
  freezeTableName: true
});
   
// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true   

try {
    Category.sync();      
    console.log('Category table created successfully.');
} catch (error) {
    console.error('Unable to create table:', error);
} 
 
module.exports = Category;    