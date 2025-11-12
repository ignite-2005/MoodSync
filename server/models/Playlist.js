import mongoose from 'mongoose';

const PlaylistSchema = new mongoose.Schema({
  mood: { type: String, required: true, enum: ['Happy', 'Sad', 'Focused', 'Relaxed', 'Energetic', 'Tired'] },
  title: { type: String, required: true },
  description: { type: String },
  tracks: [{
    title: String,
    url: String   // YouTube link or direct audio
  }]
}, { timestamps: true });

export default mongoose.model('Playlist', PlaylistSchema);
