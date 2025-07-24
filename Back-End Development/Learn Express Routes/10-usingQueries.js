/*
You may have noticed in the previous execise that out [PUT] route had no information about how to update the specified expression,
just the id of which the expression to update.
It turns out that there was more information in the request in the form of a /query string/.
#queryStrings appear at the end of the path in the UTL's and they are indicated with a [?] character.
For instance, in [/monsters/1?name=chimera&age=1]
the #queryString is [name=chimera&age=1] and the path is [/monsters/1/]

Query strings do not count as part of the route path.
Instead, the Express #server perses them into a JavScript object and attaches it to the request body as the value of [req.query].
The [key: value] relationship is indicatedby the [=] character in a query string,
and key valye pairs are separated by [&].
In the example route, the [req.query] object would be { name: 'chimera', age: 1 }
*/
const monsters = { 1: { name: 'cerberus', age: 4 } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
    const monsterUpdates = req.query;
    monsters[req.params.id] = monsterUpdates;
    res.send(monsters[req.params.id]);
});
/*
Here we have a route for updating monsters by ID.
When a PUT [/monsters/1?name=chimera&age=1] request arrives,
out callback function is called and we create a [monsterUpdates] variable to store [req.query].
Since [req.params.id] is '1', we replace [monsters[1]]'s value with [monstersUpdate].
Finally, Express sends back the new [monsters[1]]

When updating, many servers will send back the update resource after the updates are applied 
so that the client has the exact same version of the resource as the server and #database.
*/

/*
//before: 

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements } = require('./utils');

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

app.put('/expressions/:id', (req, res, next) => {
  
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

e as the server and 
database
Preview: Docs Loading link description
.

Instructions
Checkpoint 1 Enabled
1.
Use req.query to update the proper element in the expressions array.

We’ve imported a helper function from /utils.js to help with this task.

You can use the updateElement() helper function in your PUT /expressions/:id route.

It takes three arguments:

id (the ID number of the element)
queryArguments (the new, updated expression object from req.query)
elementList (the array which contains the element to update)
updateElement() updates that specific element in the elementList array (you’ll pass in the expressions array), and then returns the updated element.

Be sure to check that an expression with the id you provide exists in the expressions array (getIndexById() can help)!

To test your functionality with the Express Yourself machine, 
make sure your server is running, get all expressions, 
and then use the UPDATE tab to select an individual expression, select updates, and send the PUT request.


//after:

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
  seedElements } = require('./utils');

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

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/

/*
//after:

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

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

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// Add your POST handler below:
app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

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