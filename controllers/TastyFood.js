var TastyFood = require('../models/TastyFood');
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

// List of all Costumes
exports.tastyFood_list = async function(req, res) {
    try{
    theTastyFood = await TastyFood.find();
    res.send(theTastyFood);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.tastyFood_view_all_Page = async function(req, res) {
    try{
    theTastyFood = await TastyFood.find();
    res.render('TastyFood', { title: 'TastyFood Search Results', results: theTastyFood });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

  // Handle Costume create on POST.
exports.costume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Costume();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.costume_type = req.body.costume_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
    