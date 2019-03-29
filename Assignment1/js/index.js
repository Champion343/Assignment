"use strict";

//create elements
let div = document.createElement('div');
let select = document.createElement('select');
let description = document.createElement('p');

//attach elements to document
document.body.appendChild(div);
div.appendChild(select);
div.appendChild(description);


//initialize animals json array
let animals = [
  {
    name: 'cat',
    description: 'owners of the human race.'
  },
  {
    name: 'dog',
    description: 'primarily eats shoes and couches.'
  },
  {
    name: 'human',
    description: 'honestly just another bipedal animal.'
  },
  {
    name: 'alicorn',
    description: "mythical horse with wings and horn according to coworker's daughter."
  },
  {
    name: 'zebra',
    description: 'see horse but striped.'
  },
  {
    name: 'horse',
    description: 'see zebra but unstriped.'
  },
  {
    name: 'honey badger',
    description: "dangerous beast that just doesn't care."
  },
  {
    name: 'snake',
    description: 'danger noodle.'
  },
  {
    name: 'seahorse',
    description: 'aquatic horse.'
  },
  {
    name: 'zorse',
    description: 'see horse and zebra.'
  }
];

//create options from json and append to select
let option;
for (let i = 0; i < animals.length; ++i) {
  option = document.createElement('option');
  option.value = i;
  option.text = animals[i].name;
  option.description = 'wow';
  select.appendChild(option);
};

//initialize starting text
description.innerText = animals[0].description;

//listener to change description text when option changes
select.addEventListener('change', function (inp) {
  console.log(this.value);
  description.innerText = animals[this.value].description;
});