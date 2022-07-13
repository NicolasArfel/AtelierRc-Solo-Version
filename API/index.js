const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const path = require('path');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname, 'public')));

// body parser for POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

// run the app with a link into the console
app.listen(PORT, () => {
  console.log(`Server launched on http://localhost:${PORT}`);
});
