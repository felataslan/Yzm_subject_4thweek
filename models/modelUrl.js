const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    urlCode:{
        type:String,
        unique:true,

    } ,
    lUrl:{
    type:String,
    } ,
    sUrl:{
    type:String,
    } 
});

module.exports = mongoose.model("Url", urlSchema);