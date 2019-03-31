'use strict'

const pg = require('pg');

function getAnimalsDao(dbUsername, dbPassword, dbHost, dbPort) {

  //create pool to hold connections
  const pool = new pg.Pool({
    user: dbUsername,
    database: 'postgres',
    password: dbPassword,
    host: dbHost,
    port: dbPort
  });

  const getAnimalById = (id) => {

    return new Promise((resolve, reject) => {
      return pool.query('SELECT * FROM animal WHERE id = $1', [id], (error, results) => {
        if (error) {
          console.log(error);
          console.log('ERROR: could not retrieve animal for id: ' + id);
          reject(error);
        }
        //console.log(results.rows[0]);
        resolve(results.rows[0]);
      })
    })
  }

  const getAnimals = () => {

    return new Promise((resolve, reject) => {
      return pool.query('SELECT * FROM animal', (error, results) => {
        if (error) {
          console.log(error);
          console.log('ERROR: could not retrieve animals');
          reject(error);
        }
        //console.log(results.rows);
        resolve(results.rows);
      })
    })
  }

  return {
    getAnimalById,
    getAnimals
  }

}

module.exports = getAnimalsDao