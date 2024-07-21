import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Mongo_Url = process.env.MONGO_URL;

// Connecting db

const DBconnect = async()=>{
    try{
        if(!Mongo_Url){
            throw new Error("Mongodb connection is not set in environmental variable")
        }
        await mongoose.connect(Mongo_Url);
        console.log("Connected to Database")
    }
    catch(err){
        console.log("Mongodb connection failed", err)
    }
}
 
export default DBconnect;
