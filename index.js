// Importing neccessary components

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import DBconnect from "./utils/config.js";
import UserRouter from "./routers/userRouter.js"


// Middelwares

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connection to Database
DBconnect();

app.use("/",UserRouter)


// Port set-up

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`App is listening ${port}`))