require('dotenv').config();

module.exports = {
	dialect: process.env.DB_DIAL,
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
		underscored: true
	},
	dialectOptions: {
		useUTC: false, // reading from database
	},
	timezone: '-03:00', // writing to database
};