const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
  },
  skills: {
    type: [String],
    required: true
  },
  experience: {
    type: Number,
    required: true
  }
});

const Talent = mongoose.model('Talent', talentSchema);

module.exports = Talent;
