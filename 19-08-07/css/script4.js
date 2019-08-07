const button = document.querySelector("input[type=submit]");
button.addEventListener("click", go);

function go(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value
    var div = document.getElementById("box");

    for(let i=0 ; i < number; i++){
        var p = document.createElement("p");
        div.append(p);
        p.innerHTML = name;
    }
}