const List = require('./db.js');

const saveSchoolToDB = (info) => {
  const condition = {name: info.name, zipCode: Number(info.zipCode)};
  const update = {
    tags: info.tags,
    type: info.type,
    rating: Number(info.rating),
    description: info.description,
    address: info.address.trim() + ',' + info.city.trim() + ',' + info.state.trim(),
    reviews: [info.review],
    like: info.like,
    tour: info.tour,
    coords: info.coords
  };
  console.log(condition, 'condition from models')
  console.log(update, 'update from models')
  return List.findOneAndUpdate(condition, update, {upsert: true}).exec();
};

const getAllSchoolsFromDB = () => {
  return List.find({});
};

const updateSchoolfromDB = () => {

};

const toggleLikefromDB = (info) => {
  const condition = {name: info.name, zipCode: info.zipCode};
  const update = {
    like: info.like
  };
  console.log(condition, 'condition from models')
  console.log(update, 'update from models')
  return List.findOneAndUpdate(condition, update, {upsert: true}).exec();
};

module.exports = {saveSchoolToDB, getAllSchoolsFromDB, updateSchoolfromDB};