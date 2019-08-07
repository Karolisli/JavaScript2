const button = document.querySelector("input[type=submit]");
button.addEventListener("click", go);

function go(){
    let name = document.querySelector("input[type=text]").value;

    var lenght = name.length;

    var finalLenght = "Your name is " + lenght + " characters long";

    document.getElementById("name").innerHTML = finalLenght;

}