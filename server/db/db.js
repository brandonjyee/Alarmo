const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// If deploying to Heroku, when you provision a Postgres DB to your app, Heroku will set a
// DATABASE_URL config var in the environment containing the url to the database.
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)
module.exports = db
