document.getElementById("mainTitle").innerText = "Point and click Advent";

const gameWindow = document.getElementById("gameWindow");
const mainChar = document.getElementById("mainChar");

gameWindow.onclick = function() {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //X position with the elements
    var y = e.clientY - rect.top; //Y position for the elemts
    console.log(x + " " + y);
}