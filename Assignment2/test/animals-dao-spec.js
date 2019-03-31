'use strict'

const assert = require('assert'),
  getAnimalsDao = require('../animals-dao');

describe('animals-dao-spec setup', function () {

  let animalsDao;

  before(function (done) {
    console.log('hello')
    //setup dao
    let dbUsername = process.env.dbUsername,
      dbPassword = process.env.dbPassword;
    animalsDao = getAnimalsDao(dbUsername, dbPassword);
    console.log(animalsDao);
    done();
  })

  describe('animalsDao is working if', function () {

    it('it returns an animal by name', function (done) {

      let animal = animalsDao.getAnimalByName('cat');
      assert.equal(animal.name, 'cat');
      done();
    })

    it('it does not return an animal of a different name', function (done) {

      let animal = animalsDao.getAnimalByName('dog');
      assert.notEqual(animal.name, 'cat');
      done();
    })
  })
})