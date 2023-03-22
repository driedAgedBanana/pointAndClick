document.getElementById("mainTitle").innerText = "Point and click Advent";

const offsetChar = 10;
const gameWindow = document.getElementById("gameWindow");
const mainChar = document.getElementById("mainChar");

gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //X position with the elements
    var y = e.clientY - rect.top; //Y position for the elemts
    mainChar.style.left = x - offsetChar+"px";
    mainChar.style.top = y - offsetChar + "px";

    console.log(e.target.id);
    switch(e.target.id) {
        case "funeral1":
            console.log("Who rest here?..")
         break;
        case "grass1":
            console.log("Damn the dev didn't even finnish this properly!")
            break;
        default:
            console.log("...")
        break;
    }
}