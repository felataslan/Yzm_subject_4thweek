const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    urlCode: String,
    lUrl: String,
    sUrl: String,
    
});

module.exports = mongoose.model("Url", urlSchema);