import mongoose from "mongoose";

const URL='mongodb://localhost:27017/Polling_System';

export default async function connectDB(){
    try{
    await mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Database connected.")
}
catch(err){
    throw new Error(err);
}
}