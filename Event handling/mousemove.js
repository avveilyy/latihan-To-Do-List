const element = document.getElementById ("myElement");
element.addEventListener("mousemove", function (){
    console.log ("Kursor berada di (" + event.clientX + "," + event.clientY + ")");
});
