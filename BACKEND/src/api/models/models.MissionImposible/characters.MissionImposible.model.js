const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    picture: { type: String },
    resume: { type: String, required: false },
}, {
    timestamps: true,
});

const charactersMissionImposible = mongoose.model('characterMissionImposible', charactersSchema);

module.exports = charactersMissionImposible;


