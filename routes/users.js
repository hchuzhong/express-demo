var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('there is users.js')
})
router.get('/test', function (req, res, next) {
  res.send('there is users.js/test')
})

module.exports = router
