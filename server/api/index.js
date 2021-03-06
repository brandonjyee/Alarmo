const router = require('express').Router()
module.exports = router

router.use('/things', require('./things'))
router.use('/alarms', require('./alarms'))

// Error handling middleware for unknown route
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
