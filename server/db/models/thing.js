const Sequelize = require('sequelize')

const db = require('../db')

const Thing = db.define('thing', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/favicon.ico'
  },
  status: {
    type: Sequelize.ENUM('CREATED', 'LIVE', 'DEAD')
  },
  health: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 100
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Thing
