const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const buildingMaterials = {
  wood: ['plywood', '2x4s', 'cedar shingles'],
  metal: ['steel girders', 'wall studs', 'rebar'],
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/metals', (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;
// add here to
  if (arrayToSend) {
    res.send(arrayToSend);
  } else {
    res.status(404).send();
  }
// here
});