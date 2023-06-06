require('dotenv').config();
const mongoose = require('mongoose');
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, () => {
  console.log('Database is connected');
});

let listSchema = mongoose.Schema({
  schoolName: String,
  tags: String,
  description: String,
  location: String,
  rating: Number,
  reviews: Array,
  like: Boolean,
  tour: Boolean
});

let List = mongoose.model('List', listSchema);

module.exports = List;