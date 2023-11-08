const mongoose = require("mongoose")
const tastyFoodSchema = mongoose.Schema({
    taste:{
       type:  String,
      required :true
    },
     texture:{
        type: String,
    required:true
    },

    temperature: {
        type:Number,
        required:true
    },
})

//We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await TastyFood.deleteMany();
 let instance1 = new TastyFood({taste: "Sweet", texture: "Creamy", temperature: 100});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = mongoose.model("TastyFood", tastyFoodSchema)