const express = require('express');
const projectController = require('./controllers/projectController');

const router = express.Router();

// test
router.get('/', (req, res) => {
  res.send('Hello !');
});

/* --- Projects --- */
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/getOnlyProjects', projectController.findAllProjects);
router.get('/api/project/:id', projectController.getOne);

// i export the module so it can be use in index.js
module.exports = router;
