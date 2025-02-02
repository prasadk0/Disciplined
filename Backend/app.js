import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import  authRouter from "./Routes/authRouter.js"

dotenv.config({path:'./process.env'});
const app = express();

app.use(express.json());
app.use(cors());

const PORT  = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB Connected")
}
).catch((err)=> console.log(err))


app.use('/api',authRouter)

app.get('/',(req,res)=>{
    res.send("Backend IS WORKING")
})
app.listen(PORT,(res)=>{
    console.log("SERVER STARTED SUCCESSFULLY!");
})

