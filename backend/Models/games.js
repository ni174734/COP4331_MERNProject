const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  price: { type: Number, required: true }, 
  discountPercentage: { type: Number, required: true },
  genres: [{ type: String, required: true }],
  isActive: { type: Boolean, required: true },
  releaseDate: { type: Date, required: true }
});

module.exports = mongoose.model('Game', gameSchema);
