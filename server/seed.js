import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Playlist from './models/Playlist.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/moodsync';

const seedData = [
  {
    mood: 'Happy',
    title: 'Sunny Vibes',
    description: 'Cheerful songs to lift your mood.',
    tracks: [
      { title: 'Pharrell Williams - Happy', url: 'https://www.youtube.com/watch?v=ZbZSe6N_BXs' },
      { title: 'Katrina & The Waves - Walking on Sunshine', url: 'https://www.youtube.com/watch?v=iPUmE-tne5U' }
    ]
  },
  {
    mood: 'Sad',
    title: 'Mellow Evenings',
    description: 'Soft tunes for somber times.',
    tracks: [
      { title: 'Adele - Someone Like You', url: 'https://www.youtube.com/watch?v=hLQl3WQQoQ0' },
      { title: 'Arijit Singh - Channa Mereya', url: 'https://www.youtube.com/watch?v=284Ov7ysmfA' }
    ]
  },
  {
    mood: 'Focused',
    title: 'Deep Work (Lo-Fi)',
    description: 'Lo-fi and ambient beats for study.',
    tracks: [
      { title: 'lofi hip hop radio - beats to relax/study to', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk' },
      { title: 'Synthwave/Chillwave Mix', url: 'https://www.youtube.com/watch?v=MVPTGNGiI-4' }
    ]
  },
  {
    mood: 'Relaxed',
    title: 'Calm & Cozy',
    description: 'Relaxing instrumentals for a peaceful mood.',
    tracks: [
      { title: 'Rain Sounds for Relaxing', url: 'https://www.youtube.com/watch?v=lQ3C_3sBk2o' },
      { title: 'Acoustic Chill', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A' }
    ]
  },
  {
    mood: 'Energetic',
    title: 'Get Pumped',
    description: 'High-energy tracks to boost you up.',
    tracks: [
      { title: 'Eye of the Tiger', url: 'https://www.youtube.com/watch?v=btPJPFnesV4' },
      { title: 'Believer', url: 'https://www.youtube.com/watch?v=7wtfhZwyrcc' }
    ]
  },
  {
    mood: 'Tired',
    title: 'Gentle Wake Up',
    description: 'Soft, uplifting tunes to nudge you awake.',
    tracks: [
      { title: 'Morning Acoustic', url: 'https://www.youtube.com/watch?v=VNfKPypXvZc' },
      { title: 'Light Piano', url: 'https://www.youtube.com/watch?v=1ZYbU82GVz4' }
    ]
  }
];

async function run() {
  await mongoose.connect(MONGO_URI);
  await Playlist.deleteMany({});
  await Playlist.insertMany(seedData);
  console.log('✅ Seeded playlists.');
  await mongoose.disconnect();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
