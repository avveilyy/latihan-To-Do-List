const button = document.getElementById
("myButton");

button.addEventListener("mousedown", function (){
    button.style.backgroundColor = "red";
});

button.addEventListener("mouseup", function (){
    button.style.backgroundColor = "blue";
});