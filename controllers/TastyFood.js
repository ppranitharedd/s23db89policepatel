var TastyFood = require('../models/costume');
// List of all Costumes
exports.tastyFood_list = function(req, res) {
 res.send('NOT IMPLEMENTED: TastyFood list');
};
// for a specific Costume.
exports.tastyFood_detail = function(req, res) {
 res.send('NOT IMPLEMENTED:  TastyFood detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.tastyFood_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED:  TastyFood create POST');
};
// Handle Costume delete form on DELETE.
exports.tastyFood_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: TastyFood delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.tastyFood_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: TastyFood update PUT' + req.params.id);
};
