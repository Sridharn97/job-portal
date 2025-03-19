import mongoose from "mongoose";

//Function to Connect mongoDB Database

const connectDB=async()=>{
    mongoose.connection.on('connected',()=> console.log('DataBase Connected Successfully'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}
export default connectDB;