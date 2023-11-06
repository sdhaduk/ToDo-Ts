import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("connected to db");
        app.listen(3000, () => {
            console.log("server listening on port 3000");
        });
    })
    .catch((error) => {
        console.log(error);
    });





    






