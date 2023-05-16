import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

// domains cors



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});