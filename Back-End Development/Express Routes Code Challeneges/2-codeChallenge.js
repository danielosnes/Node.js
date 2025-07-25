/**
 * Start your server listening on the port defined by the PORT variable
 * 
 * //app.js
 * 
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4001;

// Add your code below:
 *
 */
// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});