const button = document.querySelector("input[type=submit]");
button.addEventListener("click", go);

function go(){
    let fullName = document.querySelector("input[type=text]").value;

    let dataArray = fullName.split(" ");
    let name = "Hello! " + dataArray[0];

    var div = document.createElement("div");
    div.classList.add("block");

    var box = document.getElementById("box");
    div.append(document.createTextNode(name));
    document.body.append(div);
    box.append(div);
}