import mongoose from "mongoose";

const {MONGO_URI} = process.env

if(!MONGO_URI){

    throw new Error('MONGO_URI is not defined')
 
}

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI);
        if (connection.readyState === 1) {
            console.log('DB connected');
            return Promise.resolve(true);
        }
    }  catch (error) {
        console.error(error);
        throw new Error("Error connecting to the database");
      }
};
