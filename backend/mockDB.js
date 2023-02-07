const mongoose = require('mongoose');

const { MongoMemoryServer } = require('mongodb-memory-server');
const dotenv = require("dotenv");
dotenv.config();
let mongod = null;

const connectDB = async () => {
  try {
    let dbUrl = 'mongodb://localhost:27017/mevn2022';
    console.log(process.env.NODE)
    if (process.env.NODE_ENV === 'test') {
      mongod = await MongoMemoryServer.create();
      dbUrl = mongod.getUri();
    }

    const conn = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDB, disconnectDB };