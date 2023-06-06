require('dotenv').config();
const mongoose = require('mongoose');
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  userId: Number,
  username: String,
  repoId: Number,
  repoName: String,
  url: String,
  forkCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);