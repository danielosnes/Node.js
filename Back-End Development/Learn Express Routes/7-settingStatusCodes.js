/*
Express allows us to set the #statuscode on repsonses before they are sent.
Response codes provide information to clients about how their requests were handled.
Until now, we have been allowing the Express #server to set status codes for us.
For example, and [res.send()] has by default sent a 200 OK status code.

The [res] object has a [.status()] #method to allow us to set the status code, and other meothods like [.send()] can be chained from it
*/
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };
app.get('/monsters-inventory/:name', (req, res, next) => {
    const monsterInventory = monsterInventory[req.params.name];
    if (monsterInventory) {
        res.send(monsterInventory);
    } else {
        res.status(404).send('Monster Not Found');
    }
});
/*
In the example above, we've implemented a route to retireve inventory levels from a Monster Store.
Inventory levels are kept in the [monsterStoreInventory] variable.
When a request arrives for [/monsters-inventory/mothMen], the route matches and so the callback is invoked.
[req.params.name] will be equal to ['mothMen'] and so our program access [monsterStoreInventory['mothMen']]
Since there are no [mothMen] in our inventory,
[res.status()]  sets a [404] status code on the response,
and [.send()] sends the response.
*/

/*
// before:

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
  res.send(foundExpression);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


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
    res.status(404).send('Expression not found.');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/

/*
Instructions
Checkpoint 1 Passed
1.
Let’s make sure that our GET /expressions/:id route handles invalid requests properly, for instance if we request an expression ID that does not exist.

Complete your route so that it sends back the correct expression object if it exists and sends back a 404 response if it does not.
*/

/*

*/