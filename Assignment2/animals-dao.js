'use strict'

function getAnimalsDao () {

    const getAnimalByName = (name) => {
        console.log("animalDao called for name: " + name);
        return {name};
    }

    return {
        getAnimalById
    }

}

module.exports = getAnimalsDao