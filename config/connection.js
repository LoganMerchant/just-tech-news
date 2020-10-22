const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database
let sequelize;

// If going through Heroku
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
// if going through my local machine
else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
};

module.exports = sequelize;