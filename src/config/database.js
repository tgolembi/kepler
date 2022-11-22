require('dotenv').config();

module.exports = {
  dialect: process.env.DBMY_DIAL,
  host: process.env.DBMY_HOST,
  username: process.env.DBMY_USER,
  password: process.env.DBMY_PASS,
  database: process.env.DBMY_NAME,
  define: {
    timestamps: true,
    underscored: true
  },
  dialectOptions: {
    useUTC: false // reading from database
  },
  timezone: '-03:00' // writing to database
};
