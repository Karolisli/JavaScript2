'use strict';

const button = document.getElementById("submit");
button.addEventListener("click", go);


function go(){
    var number = document.getElementById("temp").value;

    if(number < 10){
        var ats = "COLD";
    }else if(number > 30){
        var ats = "HOT";
    }else{
        var ats = "GOOD";
    }

    number = parseFloat(number);
    document.getElementById("outputKelvin").innerHTML= number+273.15+' '+ats;
}