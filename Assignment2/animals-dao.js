'use strict'

const pg = require('pg');

function getAnimalsDao(dbUsername, dbPassword, dbHost, dbPort) {

  //create pool to hold connections
  const pool = new Pool({
    user: dbUsername,
    password: dbPassword,
    host: dbHost,
    port: dbPort
  });

  const getAnimalById = (id) => {

    return pool.query('SELECT * FROM animals WHERE id = $1', [id], (error, results) => {
      if (error) {
        console.log('ERROR: could not retrieve animal for id: ' + id);
        return 'error';
      }
      return { id };
    })
  }

  const getAnimals = () => {

    return pool.query('SELECT * FROM animals', (error, results) => {
      if (error) {
        console.log('ERROR: could not retrieve all animals');
        return 'error';
      }
      return results.rows;
    })
  }

  return {
    getAnimalById,
    getAnimals
  }

}

module.exports = getAnimalsDao