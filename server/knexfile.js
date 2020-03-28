require('dotenv/config');
const { resolve } = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },
};
