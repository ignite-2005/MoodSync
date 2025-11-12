import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
}, { timestamps: true });

export default mongoose.model('Feedback', FeedbackSchema);
