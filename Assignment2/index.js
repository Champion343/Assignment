'use strict'

const getAnimalsDao = require('./animals-dao'),
  animalsDao = getAnimalsDao(),
  express = require('express'),
  router = express.Router(),
  app = express(),
  port = 3000;

//app.get('/', (req, res) => res.send('Hello World!'));

// handler for the /user/:id path, which renders a special page
router.get('/animals/:id', function (req, res, next) {
  let animal = animalsDao.getAnimalById(req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(animal));
})

// mount the router on the app
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));