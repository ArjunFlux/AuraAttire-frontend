// this is the create the database connection
// id : upadhyayparth3010_db_user
// password : FRZ8S8b96Xd00tcB  
const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CON;
mongoose.connect(mongo_url)
    .then(()=>{
        console.log("MongoDB Connected...");
    }).catch((err)=>{
        console.log("Failed To Connect",err);
    })