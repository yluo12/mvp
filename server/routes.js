const express = require('express');
const router = express.Router();
const {addSchool, getAllSchools, updateSchool} = require('./controllers.js');

router.post('/schools', addSchool);
router.get('/schools', getAllSchools);
router.patch('/schools', updateSchool);

module.exports = router;