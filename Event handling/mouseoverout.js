const element = document.getElementById
("myElement");
element.addEventListener("mouseover", function (){
    element.style.backgroundColor = "lightblue";
});

element.addEventListener("mouseout", function (){
    element.style.backgroundColor = "white";
})