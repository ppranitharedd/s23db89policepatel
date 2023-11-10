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
exports.tastyFood_create_post = async function(req, res) {
    console.log(req.body)
    let document = new TastyFood();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.taste = req.body.taste;
    document.texture = req.body.texture;
    document.temperature = req.body.temperature;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   
exports.tastyFood_detail = async function(req, res) {
 console.log("detail" + req.params.id)
 try {
 result = await TastyFood.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};

// Handle Costume update form on PUT.
exports.tastyFood_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await TastyFood.findById( req.params.id)
 // Do updates of properties
 if(req.body.taste)
 toUpdate.taste = req.body.taste;
 if(req.body.texture) toUpdate.texture = req.body.texture;
 if(req.body.temperature) toUpdate.size = req.body.temperature;
 // Update sale or same based on checkboxsale
 if (req.body.checkboxsale) {
    toUpdate.sale = true;
    toUpdate.same = false;
  } else {
    toUpdate.sale = false;
    toUpdate.same = true;
  }
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
