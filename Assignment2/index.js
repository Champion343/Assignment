'use strict'

const dbUsername = process.argv[2],
  dbPassword = process.argv[3],
  dbHost = process.argv[4],
  dbPort = process.argv[5],
  getAnimalsDao = require('./animals-dao'),
  animalsDao = getAnimalsDao(dbUsername, dbPassword, dbHost, dbPort),
  express = require('express'),
  router = express.Router(),
  app = express(),
  port = 3000;

console.log(process.argv);
//uri for retrieving an animal
router.get('/animals/:id', function (req, res, next) {

  animalsDao.getAnimalById(req.params.id)
    .then(animal => {
      console.log(animal);
      if (animal) {
        res.setHeader('Content-Type', 'application/json');
        return res.send(JSON.stringify(animal));
      } else {
        res.status(404)
          .send('Not found');
      }
    });

})

//uri for retrieving all animals
router.get('/animals', function (req, res, next) {
  animalsDao.getAnimals().then(animals => {
    console.log(animals);
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(animals));
  });
})

// mount the router on the app
app.use('/', router);

app.listen(port, () => console.log(`App listening on port ${port}!`));