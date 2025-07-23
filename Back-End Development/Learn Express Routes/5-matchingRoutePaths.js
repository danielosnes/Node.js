/* 
┌──────────────────────────────┐
│       Request                │
│     GET /expressions         │
└────────────┬─────────────────┘
             │
    Checks route blocks
     ┌───────┴────────┐
     │                │
┌────▼──────┐   ┌─────▼───────┐
│ Incorrect │   │   Correct   │
│  (wrong   │   │  (matches   │
│   route)  │   │   route)    │
└────┬──────┘   └─────┬───────┘
     │                │
     ▼                ▼
app.get('/another-   app.get('/expressions',
 route', (req,        (req, res, next) => {
 res, next) => {          res.send();
   // handler         })
})
                       │
                       ▼
              ┌────────────────┐
              │ Sends Response │
              └────────────────┘

*/

/* 
Express tries to match requests by route,
meaning that if we send a request to [<server address>:<port number>/api-endpoint],
the Express #server will search through any registered routes in order and try to match [/api-endpoint].

Express searches through routes in the orde rthat they are registered in your code.
The first one that is matched will be used, and its callback will be called.

In the example above, you can see two [.get()] routes registered at [/another-route] and [/expressions].
When a [GET/expressions] request arrives to the Express server, 
it first checks [/another-route]'s path because it is registered before the [/expression]'s route.
Because [/another-route] does not match the path, Express moves on to the next registered #middleware.
Since the route matches the path, the callback is invoked, and it sends a response.

If there are no matching routes registered, or the Express server has not sent a response at the end of all matched routes,
it will automatically send back a 404 Not Found response,
meaning that no routes were matched or no response was ultimately sent by the registered routes.
*/

/* 

*/

/* 

*/

/* 

*/