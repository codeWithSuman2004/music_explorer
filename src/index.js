import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js'

dotenv.config({
  path: './env'
})

const port = process.env.PORT;
// console.log(port);     
connectDB();





































// import express from 'express';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config();
// const PORT = process.env.PORT || 4000;

// ;(async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

//     app.on("error", (error)=>{
//       console.log("ERROR : ",error);
//       throw error;
//     });

//     app.listen(PORT,()=>{
//       console.log(`App is listening on port${PORT}`);
//     });

//   } catch (error) {
//     console.error("error : ",error);
//     throw error;
//   }
// })();


