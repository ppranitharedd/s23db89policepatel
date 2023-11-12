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
        required:true
    }
});
module.exports = mongoose.model("TastyFood", TastyFoodSchema)