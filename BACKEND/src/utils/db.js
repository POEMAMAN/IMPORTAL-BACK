const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dotenv = require('dotenv');
dotenv.config();


const urlDB = process.env.DB_URL
const mongoDb = urlDB;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {

    });
    // Nombre de DB y el Host en el que está
    const { name, host } = db.connection;
    console.log(`Conectado a la DB : ${name} en el host: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB`, error);
  }
};

module.exports = { connect };
