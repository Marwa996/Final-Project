import mongoose from "mongoose";
import { connect, ConnectOptions } from "mongoose";

mongoose.set('strictQuery', false);

export const dbConnect = () =>{
    connect(process.env.MONGO_URL, {
        // useuNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        ()=> console.log("connect successfully"),
        (error)=> console.log(error)
    )
}