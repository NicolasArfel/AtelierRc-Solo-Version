const express = require('express');
const furnitureController = require('./controllers/furnitureController');
const loginController = require('./controllers/loginController');

// here i import evry controllers needed
const projectController = require('./controllers/projectController');

const router = express.Router();

// test
router.get('/', (req, res) => {
  res.send('Hello !');
});

/* --- Projects --- */
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/getOnlyProjects', projectController.findAllProjects);
router.get('/api/project/:id', projectController.getOneProject);

/* --- Furnitures --- */
router.get('/api/furnitures', furnitureController.getAllFurnitures);
router.get('/api/furniture/id', furnitureController.getOneFurniture);

/* --- Login --- */
router.post('/api/login', loginController.login);

// i export the module so it can be use in index.js
module.exports = router;
