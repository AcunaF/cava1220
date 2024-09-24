import mongoose from "mongoose";

export const MONGO_URL = "mongodb+srv://admin:admin123@cluster0.kzmoky1.mongodb.net/loginNext" 

export const connectMongo = async () => {

try{
    await mongoose.connect(MONGO_URL, {
     //   useNewUrlParser: true,
     //   useUnifiedTopology: true,
     //   useFindAndModify: false,
    });
    console.log("MongoDB connected successfully");

}catch(err){
console.log(err);
}
}