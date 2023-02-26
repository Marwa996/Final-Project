import dotenv from 'dotenv'
dotenv.config();

import express from "express";
import cors from "cors"
import vendorRouter from './router/vendor.router'
import { dbConnect } from './config/database.config';

dbConnect();

const app = express();

//angular on localHost 4200
//backend on localHost 5000
//that's why we used cors


app.use(cors({
    credentials:true,
    origin:'*'
}));

app.use("/vendor",vendorRouter)

app.listen(5000,()=>{
    console.log("localhost : 5000")
});