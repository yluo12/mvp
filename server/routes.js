const express = require('express');
const router = express.Router();
const {addSchool, getAllSchools, updateSchool, updateLike, updateTour, deleteSchool, addReview} = require('./controllers.js');

router.post('/schools', addSchool);
router.get('/schools', getAllSchools);
router.patch('/schools', updateSchool);
router.delete('/schools', deleteSchool);
router.patch('/schools/like', updateLike);
router.patch('/schools/tour', updateTour);
router.patch('/schools/reviews', addReview);

module.exports = router;