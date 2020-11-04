console.log(__dirname);
const env = require('dotenv')
env.config()

const isProd = process.env.NODE_ENV === 'production'
const entitiesExtension = isProd ? 'js' : 'ts'
const entitiesDir = isProd ? 'dist' : 'src'

module.exports = {
  type: "postgres",
  entities: [
    `${__dirname}/${entitiesDir}/**/*.entity.${entitiesExtension}`
  ],
  url: process.env.DATABASE_URL,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
}