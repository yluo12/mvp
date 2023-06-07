const {saveSchoolToDB, getAllSchoolsFromDB, updateSchoolfromDB, toggleLikefromDB, toggleTourfromDB} = require('./models.js');

const addSchool = (req, res) => {
  // console.log(req.body);
  saveSchoolToDB(req.body)
    .then((dbRes) => {
      res.status(201).send();
    })
    .catch((err) => {
      // console.log(err, 'cannot save data to db')
      res.sendStatus(404);
    });
};

const getAllSchools = (req, res) => {
  // console.log(req.param);
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
  console.log(req.body);
  updateSchoolfromDB(req.body)
    .then((dbRes) => {
      console.log(dbRes.data);
      res.status(201).send();
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const updateLike = (req, res) => {
  toggleLikefromDB(req.body)
    .then((dbRes) => {
      console.log(dbRes);
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

module.exports = {addSchool, getAllSchools, updateSchool, updateLike, updateTour};