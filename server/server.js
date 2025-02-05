import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import router from './routes/transactionRoutes.js';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL

app.use(cors())
app.use(express.json());
app.use('/api/transactions', router);

mongoose.connect(MONGO_URL).then(() => {
    console.log("Database is connected");
    app.listen(PORT, (req, res) => {
        console.log(`Listening on ${PORT}`);
    })
})