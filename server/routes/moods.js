import { Router } from 'express';

const router = Router();

// List of supported moods
const SUPPORTED_MOODS = ['Happy', 'Sad', 'Focused', 'Relaxed', 'Energetic', 'Tired'];

// Tiny keyword-based sentiment classifier
function classifyMoodFromText(text) {
  const t = (text || '').toLowerCase();
  // very naive keyword cues
  const cues = [
    { mood: 'Happy', words: ['happy', 'joy', 'excited', 'great', 'awesome', 'good'] },
    { mood: 'Sad', words: ['sad', 'down', 'upset', 'depressed', 'cry', 'bad'] },
    { mood: 'Focused', words: ['focus', 'study', 'concentrate', 'work', 'productive'] },
    { mood: 'Relaxed', words: ['relax', 'calm', 'chill', 'peace', 'soothing'] },
    { mood: 'Energetic', words: ['energy', 'energetic', 'hype', 'pump', 'gym'] },
    { mood: 'Tired', words: ['tired', 'sleepy', 'exhausted', 'fatigued', 'drained'] },
  ];
  for (const c of cues) {
    for (const w of c.words) {
      if (t.includes(w)) return c.mood;
    }
  }
  // Simple fallback rules
  if (t.includes('bored')) return 'Energetic';
  if (t.includes('anxious') || t.includes('stressed')) return 'Relaxed';
  return 'Focused';
}

router.get('/', (req, res) => {
  res.json({ moods: SUPPORTED_MOODS });
});

router.post('/classify', (req, res) => {
  const { text } = req.body || {};
  const mood = classifyMoodFromText(text || '');
  res.json({ text, mood });
});

export default router;
