const Sequelize = require('sequelize')

const db = require('../db')

const Alarm = db.define('alarm', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  msg: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: '',
    validate: {
      notEmpty: true,
      isUppercase: true
    }
  },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Alarm
