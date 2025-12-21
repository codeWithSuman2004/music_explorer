import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials : true
}));

app.use(express.json({limit:"16kb"}));

app.use(express.urlencoded({extended : true, limit : "16kb"}));

app.use(express.static("public"));

app.use(cookieParser());
   




app.get('/', (req, res) => {
  res.send('Hello, World!');
});


