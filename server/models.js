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
  return List.findOneAndUpdate(condition, update, {upsert: true}).exec();
};

const getAllSchoolsFromDB = () => {
  return List.find({});
};

const updateSchoolfromDB = () => {

};

const deleteSchoolFromDB = (info) => {
  return List.deleteOne(info).exec();
};

const toggleLikefromDB = async (info) => {
  const condition = {name: info.name, zipCode: info.zipCode};
  const update = {};
  if (info.like !== true) {
    update.like = true;
  } else {
    update.like = false;
  }
  return List.findOneAndUpdate(condition, update, {new: true}).exec();
};

const toggleTourfromDB = (info) => {
  const condition = {name: info.name, zipCode: info.zipCode};
  const update = {};
  if (info.tour !== true) {
    update.tour = true;
  } else {
    update.tour = false;
  }
  return List.findOneAndUpdate(condition, update, {new: true}).exec();
};

const addReviewToDB = (info) => {
  const condition = {name: info.name, zipCode: info.zipCode};
  const update = {'$push': {'reviews': info.review}};

  return List.findOneAndUpdate(condition, update, {'new': true}).exec();
};

module.exports = {saveSchoolToDB, getAllSchoolsFromDB, updateSchoolfromDB, deleteSchoolFromDB, toggleLikefromDB, toggleTourfromDB, addReviewToDB};