'use strict';

const button = document.getElementById("submit");
button.addEventListener("click", go);

const ticket = 6;

function go(){
    var age = document.getElementById("age").value;

    if(age < 16){
        var final = "That will be" +' '+ ticket / 2+' '+ "ANZ";
    }else if(age > 60){
        var final = "You go for FREE";
    }else{
        var final = "That will be" +' '+ ticket+' '+ "ANZ"
    }

    var price = document.getElementById("price").innerHTML =final;
}