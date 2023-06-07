const express = require('express');
const router = express.Router();
const {addSchool, getAllSchools, updateSchool, updateLike, updateTour} = require('./controllers.js');

router.post('/schools', addSchool);
router.get('/schools', getAllSchools);
router.patch('/schools', updateSchool);
router.patch('/schools/like', updateLike);
router.patch('/schools/tour', updateTour);

module.exports = router;