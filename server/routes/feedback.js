import { Router } from 'express';
import Feedback from '../models/Feedback.js';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  const doc = await Feedback.create({ name, email, phone, message });
  res.json({ ok: true, feedback: doc });
});

export default router;
