import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  prompt: String,
  answer: String,
  createdAt: Date,
});

export default mongoose.models.Question ||
  mongoose.model('Question', EntrySchema);