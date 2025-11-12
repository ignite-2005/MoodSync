import { Router } from 'express';
import Playlist from '../models/Playlist.js';

const router = Router();

// GET /api/playlists?mood=Happy
router.get('/', async (req, res) => {
  const mood = req.query.mood;
  const query = mood ? { mood } : {};
  const lists = await Playlist.find(query).lean();
  res.json({ playlists: lists });
});

export default router;
