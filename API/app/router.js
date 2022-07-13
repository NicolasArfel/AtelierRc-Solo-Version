const express = require('express');

const router = express.Router();

// test
router.get('/', (req, res) => {
  res.send('Hello !');
});

// i export the module so it can be use in index.js
module.exports = router;
