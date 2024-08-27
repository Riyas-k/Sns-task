import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
dotenv.config()

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
