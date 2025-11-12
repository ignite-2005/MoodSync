// server/index.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// ✅ Import route files correctly
import moodsRouter from './routes/moods.js';
import playlistsRouter from './routes/playlists.js';
import feedbackRouter from './routes/feedback.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/moodsync';
const PORT = process.env.PORT || 5000;

// ✅ Connect MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Test route
app.get('/', (req, res) => {
  res.json({ message: 'MoodSync API is running' });
});

// ✅ Register routes
app.use('/api/moods', moodsRouter);
app.use('/api/playlists', playlistsRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/auth', authRouter);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
