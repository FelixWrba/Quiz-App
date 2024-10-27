const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('quiz app', process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
	.then(() => console.log('Connected successfully.'))
	.catch(err => console.error('Unable to connect to the database due to:', err));

module.exports = sequelize;