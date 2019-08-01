'use strict'
const express = require('express');
const app = express();

app.use(express.static('public'));

module.exports = { app };

let port = 21000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})