const express = require('express');
const router = express.Router();
const {addSchool, getAllSchools, updateSchool, updateLike} = require('./controllers.js');

router.post('/schools', addSchool);
router.get('/schools', getAllSchools);
router.patch('/schools', updateSchool);
router.patch('/schools/like', updateLike);

module.exports = router;