const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Product = sequelize.define('Product', { 
    // Model attributes are defined here
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false  
    },
    price: {
      type: DataTypes.DOUBLE   
      // allowNull defaults to true 
    },
    productUrl: { 
        type: DataTypes.STRING   
        // allowNull defaults to true
    }      
  }, {
    // Other model options go here
    freezeTableName: true  
  }); 
  
  try {
    Product.sync();      
    console.log('Product table created successfully.');
  } catch (error) {
      console.error('Unable to create table:', error);
  }
  module.exports = Product;         