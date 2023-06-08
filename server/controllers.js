const {saveSchoolToDB, getAllSchoolsFromDB, updateSchoolfromDB, deleteSchoolFromDB, toggleLikefromDB, toggleTourfromDB, addReviewToDB} = require('./models.js');

const addSchool = (req, res) => {
  saveSchoolToDB(req.body)
    .then((dbRes) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const getAllSchools = (req, res) => {
  getAllSchoolsFromDB()
    .then((dbRes) => {
      console.log(dbRes);
      res.status(201).send(dbRes);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const updateSchool = (req, res) => {
  updateSchoolfromDB(req.body)
    .then((dbRes) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const deleteSchool = (req, res) => {
  deleteSchoolFromDB()
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const updateLike = (req, res) => {
  toggleLikefromDB(req.body)
    .then((dbRes) => {
      res.status(200).send(dbRes.like);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const updateTour = (req, res) => {
  toggleTourfromDB(req.body)
    .then((dbRes) => {
      res.status(200).send(dbRes.tour);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const addReview = (req, res) => {
  // console.log(req.body);
  addReviewToDB(req.body)
    .then((dbRes) => {
      // console.log(dbRes);
      res.status(200).send(dbRes);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports = {addSchool, getAllSchools, updateSchool, deleteSchool, updateLike, updateTour, addReview};