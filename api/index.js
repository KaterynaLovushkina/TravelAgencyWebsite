import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usrRoute from "./routes/users.js"
import tripsRoute from "./routes/trips.js"

import cookieParser from "cookie-parser";
const  app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};
// app.use(cookieParser())


// app.use("/auth", authRoute);
// app.use("/users", usrRoute);

// app.use(express.json())
app.use("/trips", tripsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack,
    }
    )});
app.listen(8400, ()=>{
    connect()
    console.log('start')
})