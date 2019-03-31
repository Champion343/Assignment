"use strict";

//create elements
let div = document.createElement('div');
let select = document.createElement('select');
let description = document.createElement('span');

div.display = 'inline-block';

//attach elements to document
document.body.appendChild(div);
div.appendChild(select);
div.appendChild(description);

function httpGetAnimalById(id) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      description.innerText = JSON.parse(xhttp.responseText).description;
    }
  };
  xhttp.open("GET", `http://localhost:3000/${id}`, true);
  xhttp.send();
}

function httpGetAnimals() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let animals = JSON.parse(xhttp.responseText);
      //create options from json and append to select
      let option;
      for (let i = 1; i < animals.length + 1; ++i) {
        option = document.createElement('option');
        option.value = i;
        option.text = animals[i - 1].name;
        select.appendChild(option);
      };
      //initialize starting text
      description.innerText = animals[0].description;

    }
  };
  xhttp.open("GET", "http://localhost:3000/", true);
  xhttp.send();
}

httpGetAnimals();

//listener to change description text when option changes
select.addEventListener('change', function (inp) {
  httpGetAnimalById(this.value);
});