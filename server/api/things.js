const router = require('express').Router()
const {Thing} = require('../db/models')

module.exports = router

// Test this route by going to: localhost:[PORT]/api/things
router.get('/', async (req, res, next) => {
  try {
    const things = await Thing.findAll()
    res.json(things)
  } catch (err) {
    next(err)
  }
})
