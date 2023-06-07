const express = require('express');
const router = express.Router();
const {addSchool, getAllSchools, updateSchool, updateLike, updateTour, deleteSchool} = require('./controllers.js');

router.post('/schools', addSchool);
router.get('/schools', getAllSchools);
router.patch('/schools', updateSchool);
router.delete('/schools', deleteSchool);
router.patch('/schools/like', updateLike);
router.patch('/schools/tour', updateTour);

module.exports = router;