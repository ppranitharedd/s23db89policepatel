var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('TastyFood', { title: 'Search Results Tasty Foods' });
});

module.exports = router;
