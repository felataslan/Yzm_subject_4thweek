const mongoose = require("mongoose");

const conn = async () => {
    try{
        await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser:true
        });
        console.log("Database is connected");
    }
    catch(err){
        console.log('ERROR: ',err.message);
        process.exit(1);
    }
}

module.exports = conn;