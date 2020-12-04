const router = require('express').Router()

router.use('/api', require('./noteRoutes.js'))
router.use('/', require('./htmlRoutes'))

module.exports = router
