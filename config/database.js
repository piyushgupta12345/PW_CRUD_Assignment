const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch((err)=>{
        console.log("db not connected")
        console.error(err);
        process.exit(1);
    })
}

module.exports = dbConnect;