const mongoose = require("mongoose");

const contactschema = new mongoose.Schema({
  
    name :{
        type:String,
        required:true

    },
    email :{
        type:String,
        required:true,
        unique:true
        
    },
    phone:{
        type:Number,
        required:true
    },
    
    message :{
        type:String,
        required:true

    },

    date:{
        type:Date,
        default:Date.now
    }
  });

const contactData = mongoose.model("contactData",contactschema);

module.exports = contactData