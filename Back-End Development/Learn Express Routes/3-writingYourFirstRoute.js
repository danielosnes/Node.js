/*
Once the #expressServer is listening, it can respond to any and all requests.
But how does it know wha tto do with these requests?
To tell our server how to deal with any given request, we register a series of routes.
#routes define the #controlFlow for requests base on the request's #path and #HTTPVerb.

For example, if your server recieves a GET request at [/monsters], we will use a route to define the approriate functionality for that HTTP Verb (GET) and path ([/monsters]).

The path is part of a request #URL after the #hostname and port number 
so in a request to [localhost:4001/monsters], 
the path is [monsters/] (in this example, the hostname is [localhost]), the port numbers is [4001].

The #HTTPVerb is always included in the request,,
and it is one of the #finiteNumberOfOptions used to specify expected functionality.
GET requests are used for retrieving resources from a server, and we will discuss additional request types in later exercises.

Express uses[app.get()] to register routes to match [GET] requests.
Express routes (including [app.get()]) usualy take two arguments
- a path (usually a string)
- a callback function to handle the request and send a response
*/

const moods = [{ mood: 'excited about express!'},
    { mood: 'route-tastic!' }];
    app.get('/moods', (req, res, next) => {
        // Here we would send back the moods array in response
    });

/*
The route above will match any [GET] requests to ['/moods'] and call the callback function,
passing in two objects as the first two arguments.
These object represent the request sent to the server and the response that the Express server should eventually send to the client.

If no routes are matched on a client request
the Express server will handle sending a 404 Not Found response to the client.
*/

/*
//before:

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/

/*
//After:

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:
const expressions = [{ expression: 'Happy!'}, { expression: 'excited!' }];
  app.get('/expressions', (req, res, next) => {
    // Send back the expressions array in response
  })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

*/

/*
$ node app.js
Listening on port 4001
*/