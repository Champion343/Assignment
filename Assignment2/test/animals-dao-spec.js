'use strict'

const assert = require('assert'),
  getAnimalsDao = require('../animals-dao');

describe('animals-dao-spec setup', function () {

  let animalsDao;

  before(function (done) {
    console.log('hello')
    //setup dao
    let dbUsername = process.env.dbUsername,
      dbPassword = process.env.dbPassword,
      dbHost = process.env.dbHost,
      dbPort = process.env.dbPort;
    animalsDao = getAnimalsDao(dbUsername, dbPassword, dbHost, dbPort);
    console.log(animalsDao);
    done();
  })

  describe('animalsDao is working if', function () {

    it('it returns an animal by id', function (done) {

      animalsDao.getAnimalById(1)
        .then(animal => {
          assert.equal(animal.name, 'cat');
          done();
        })
    })

    it('it does not return an animal of a different name', function (done) {

      animalsDao.getAnimalById(1).then(animal => {
        assert.notEqual(animal.name, 'dog');
        done();
      })
    })
  })
})