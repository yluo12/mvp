require('dotenv').config();
const mongoose = require('mongoose');
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
// console.log(`mongodb://${DB_HOST}/${DB_NAME}`)

const db = mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true});

db
  .then(db => console.log(`Connected to database`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo`);
    console.log(err);
  });

let listSchema = mongoose.Schema({
  name: String,
  tags: String,
  type: String,
  description: String,
  rating: Number,
  reviews: Array,
  like: Boolean,
  tour: Boolean,
  address: String,
  zipCode: Number
});

let List = mongoose.model('List', listSchema);

module.exports = List;