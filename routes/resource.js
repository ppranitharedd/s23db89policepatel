var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tastyFood_controller = require('../controllers/TastyFood');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/TastyFood', tastyFood_controller.tastyFood_create_post);
// DELETE request to delete Costume.
router.delete('/TastyFood/:id', tastyFood_controller.tastyFood_delete);
// PUT request to update Costume.
router.put('/TastyFood/:id', tastyFood_controller.tastyFood_update_put);
// GET request for one Costume.
router.get('/TastyFood/:id',tastyFood_controller.tastyFood_detail);
// GET request for list of all Costume items.
router.get('/TastyFood', tastyFood_controller.tastyFood_list);
module.exports = router;