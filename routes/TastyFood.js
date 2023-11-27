var express = require('express');
var router = express.Router();

var express = require('express');
const tastyFood_controlers= require('../controllers/TastyFood');
var router = express.Router();
/* GET tastyFoods */
router.get('/', tastyFood_controlers.tastyFood_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('TastyFood', { title: 'Search Results Tasty Foods' });
});

/* GET detail Tasyfood page */
router.get('/detail', tastyFood_controlers.tastyFood_view_one_Page);

/* GET create costume page */
router.get('/create', tastyFood_controlers.tastyFood_create_Page);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET create update page */
router.get('/update',secured, tastyFood_controlers.tastyFood_update_Page);

/* GET delete costume page */
router.get('/delete', tastyFood_controlers.tastyFood_delete_Page);


module.exports = router;
