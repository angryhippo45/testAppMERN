import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI || "";
const client = new MongoClient("mongodb+srv://stanjoy:Maverick24$$@testcluster.mvqscur.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster");

let db = undefined;

try{
    await client.connect().then((res) => {
        console.log("MongoDB connected successfully");
        db = res.db("sample_mflix");
    }
    ).catch((err) => {
        console.error("MongoDB connection error: ", err);
    }); 
}catch(err){
    console.log("MongoDB connection error: ", err);
}

export default db;
