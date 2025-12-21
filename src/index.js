import mongoose from 'mongoose';
import express from 'express'
import dotenv from 'dotenv'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js'

const app = express();
dotenv.config({
  path: './env'
})

const port = process.env.PORT; 

connectDB()
.then(()=>{
  app.listen(port,()=>{
    console.log(`Server at running on PORT ${port}`);
    
  })
})
.catch((err)=>{
  console.log("MOngo Connection ERROR!!! : ",err);
});





































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


