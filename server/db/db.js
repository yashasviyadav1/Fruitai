const mongoose = require("mongoose");


require('dotenv').config()

const db = async() => { 
    try{ 
        mongoose.set('strictQuery',false);
        await mongoose.connect(`mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@cluster0.emms1dh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("connected to mongoDB"); 
    }
    catch(error){
        console.log("mongodb connection ERROR" + error.message);
    }
}

module.exports = db;