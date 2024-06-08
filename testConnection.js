const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://red-1:Re@511667@cluster0.tjwb9jo.mongodb.net/red-1?retryWrites=true&w=majority&appName=Cluster0';

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    mongoose.connection.close();
  } catch (err) {
    console.error('Connection failed!', err);
  }
}

testConnection();
