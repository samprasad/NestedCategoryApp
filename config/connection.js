const { Sequelize } = require('sequelize');

const dbName     = 'cat_db';
const dbUserName = 'root';
const dbPassword = 'redhat'; 

const sequelize = new Sequelize(dbName,dbUserName,dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    // await sequelize.authenticate(); 
    sequelize.authenticate(); 
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
} 

module.exports = sequelize;