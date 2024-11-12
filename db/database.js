// server/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('calendar_app', 'root', 'suresh12', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
