'use strict'

function getAnimalsDao () {

    const getAnimalById = (id) => {
        console.log("animalDao called for id: " + id);
        return {id};
    }

    return {
        getAnimalById
    }

}

module.exports = getAnimalsDao