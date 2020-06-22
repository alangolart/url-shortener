require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

module.exports = {
  env: process.env.NODE_ENV,
  server: {
    host: process.env.HOST,
    port: process.env.SERVER_PORT,
  },
  db: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  databaseURL: process.env.DATABASE_URI,
}
