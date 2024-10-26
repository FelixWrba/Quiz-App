const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('quiz app', 'root', 'abc123', {
	host: 'localhost',
	dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
	.then(() => console.log('Connected successfully.'))
	.catch(err => console.error('Unable to connect to the database due to:', err));

module.exports = sequelize;