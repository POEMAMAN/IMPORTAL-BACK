const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoGameSchema = new Schema(
  {
    title: { type: String, required: true },
    picture: { type: String, required: true },
    platform: { type: String, required: false },
    year: { type: Number, required: false },
    studio: { type: String, required: false },
    clasification: { type: String, required: false },
    resume: {type:String, required:false},
  },
  {
    timestamps: true,
  }
);

const VideoGameApesPlanet = mongoose.model('videoGameApesPlanet', videoGameSchema);
module.exports = VideoGameApesPlanet;