/*
Express is a Node module, so in order to use it we will need to import it into our program file.
To #createaserver the imported [express] function must be invoked.
*/
const express = require('express');
const app = express();

/*
One the first line, we import the Express library with [require].
When invoked on the second line, it returns an instance of an Express application.
This application can then be used to state a server and specify server behavior.

The purpose of a server is to listen for requests, perform whatever action is required to satisfy the request and then return a response.
Listen
Perform
Return
In order for our server to start responding, we have to tell the server where to /listen/ for new requests by provided a port number #argument to a #method called [app.listen()].
The server will then listen on the specified #port and respond to any requests that come into it.

The second argument is a callback function that will be called once the server is running and ready to recieve responses.
*/
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

/*
In this example, our [app.listen()] call will start a server listening on port [4001], and once the server is started it will log ['Server is listening on port 4001']
*/

/*
// before: 
// Import the express library here
const express = 
// Instantiate the app here
const app = 

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
*/

/*
// after:

// Import the express library here
const express = require('express')
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/

// $ node app.js
// output:  Server is listening on port 4001.