const mongoose = require("mongoose")
const mongoose = require("mongoose")
const TastyFoodSchema = mongoose.Schema({

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
        required:true,
        min: 0,
        max: 100000
    }
});
module.exports = mongoose.model("TastyFood", TastyFoodSchema)