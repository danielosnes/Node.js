/*
Parameters are extremely helpful in making #server routes dynamic and able to respond to different inputs.
Route parameters will match with anything in their specific part of the path,
so a route maching [/mosters/:name] would match with all of the following request paths:
/monsters/hydra
/monsters/jorgmungandr
/monsters/manticore
/monsters/123

in order for a request to match a route path, it must match the entire path as shown in the diagram.
┌───────────────────────────────┐
│         Request               │
│     GET /expressions/1        │
└────────────┬──────────────────┘
             │
             │  checks the block and fails
             ▼
        incorrect
        ✓ correct action      ✗ wrong route (doesn't have /1)
           │
           ▼
   app.get('/expressions', (req, res, next) => {
       res.send(getAllExpressions());
   });

             │
             │  checks the block and passes
             ▼
        correct
        ✓ correct action      ✓ correct route (has /1)
           │
           ▼
   app.get('/expressions/:id', (req, res, next) => {
       const expression = getExpressionById(req.params.id);
       res.send(expression);
   });

                         │
                         ▼
                ┌────────────────┐
                │ Sends Response │
                └────────────────┘


The request arrives for [/expressions/1].
It first tries to match the [/expressions] route but can't because it has additional path segments after [/expressions], it does not match this route and moves on to the next.
It matchex [/expressions/:id] because [:id] will match any value at that levelof the path segment.
The route matches, so the Express server calls the callback function,
which in turn handles the request and sends a response.
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

/*

*/