'use strict'

const   dbUsername = process.argv[2],
  dbPassword = process.argv[3],
  getAnimalsDao = require('./animals-dao'),
  animalsDao = getAnimalsDao(dbUsername,dbPassword),
  express = require('express'),
  router = express.Router(),
  app = express(),
  port = 3000;

//uri for retrieving an animal
router.get('/animals/:name', function (req, res, next) {
  let animal = animalsDao.getAnimalById(req.params.name);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(animal));
})

// mount the router on the app
app.use('/', router);

app.listen(port, () => console.log(`App listening on port ${port}!`));