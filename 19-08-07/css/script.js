'use strict';

const button = document.getElementById("submit");
button.addEventListener("click", go);

let number = 0;

function go(){
    let name = document.getElementById("name").value;
    document.getElementById("last_person").innerHTML = name;

    number++;

    document.getElementById("number_registered").innerHTML = number;

}