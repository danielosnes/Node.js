/**
 * Write a [GET /sausauges] route that sends back the whole [sausagesTypes] array
 */
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes);
});
app.get('/sausages/:id', (req, res, next) => {
  const foundSausages = getElementById(req.params.id, sausages);
  if (foundSausages) {
    res.send(foundSausages);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

