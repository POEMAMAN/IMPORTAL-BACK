const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: { type: String, required: true },
    acthor: { type: String, required: true },
    house: { type: String, required: false },
    title: { type: String, required: false },
    kingdom: { type: String, required: false },
    picture: { type: String },
    resume: {type:String, required:false},
  },
  {
    timestamps: true,
  }
);

const CharactersLordOfTheRings = mongoose.model('characterLordOfTheRings', charactersSchema);

module.exports = CharactersLordOfTheRings;
