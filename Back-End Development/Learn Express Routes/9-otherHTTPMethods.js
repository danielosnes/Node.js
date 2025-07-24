/*
#HTTPProtocol defines a number of differed #method verbs with many use cases.
So far, we have been using the [GET] request which is probably the most common of all.
Everytime your browser loads an image, it is making a [GET] request for that file.

This course will cover three other important #HTTP methods:
[PUT], [POST], and [DELETE]. 
Express provides methods for each one: [app.put()], [app.post()], and [app.delete()]

[PUT] requests are used for updating existing resources.
In our Express Yourself machine, 
a PUT request will be used to update the name or emoji of an expression already saved in our #database.

For this reason, we will need to include a unique identifier as a route #parameter to determine which specific resource to update.
*/

/*
//before:

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

// Add your PUT route handler below:


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

Instructions
Checkpoint 1 Passed
1.
For now, open a PUT /expressions/:id route with an empty (req, res, next) callback function. We will fully implement its functionality in the next exercise.


// after: 

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

// Add your PUT route handler below:
app.put('/expressions/:id', (req, res, next) => {
  // please leave this part blank
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/