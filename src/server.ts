import 'dotenv/config'
import express from 'express';
import mongoose from "mongoose";
const app = express();


const start = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to MongoDb");
    } catch (err) {
      console.error(err);
    }
  };

app.use(express.json());

app.listen(3000, () => { console.log('listening on port 3000') })
start();