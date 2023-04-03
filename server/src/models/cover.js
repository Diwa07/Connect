const mongoose = require('mongoose');
const coverSchema =new mongoose.Schema({
        fullName:{type:String},
  
    
        picture:{type:String},
        file:{type:String},
      
   
 

},{collection:"cover"});
module.exports=mongoose.model("cover",coverSchema);