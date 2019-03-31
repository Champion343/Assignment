'use strict'

const   dbUsername = process.argv[2],
  dbPassword = process.argv[3],
  dbHost = process.argv[4],
  dbPort = process.argv[5],
  getAnimalsDao = require('./animals-dao'),
  animalsDao = getAnimalsDao(dbUsername,dbPassword,dbHost,dbPort),
  express = require('express'),
  router = express.Router(),
  app = express(),
  port = 3000;

//uri for retrieving an animal
router.get('/animals/:id', function (req, res, next) {
  let animal = animalsDao.getAnimalById(req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(animal));
})

//uri for retrieving all animals
router.get('/animals', function (req, res, next) {
  let animals = animalsDao.getAnimals();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(animals));
})

// mount the router on the app
app.use('/', router);

app.listen(port, () => console.log(`App listening on port ${port}!`));