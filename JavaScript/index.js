document.getElementById("mainTitle").innerText = "Point and click Advent";

const offsetChar = 10;
const gameWindow = document.getElementById("gameWindow");
const mainChar = document.getElementById("mainChar");

const mainCharSpeech = document.getElementById("mainCharSpeech");

gameWindow.onclick = function(e) {
    if(mainCharSpeech.style.opacity == 0) {
     var rect = gameWindow.getBoundingClientRect();
     var x = e.clientX - rect.left; //X position with the elements
     var y = e.clientY - rect.top; //Y position for the elemts
     mainChar.style.left = x - offsetChar+"px";
     mainChar.style.top = y - offsetChar + "px";

     console.log(e.target.id);
     switch(e.target.id) {
        case "funeral1":
            showMessage("Who rest here?..");
            console.log("Who rest here?..")
         break;
        case "grass1":
            showMessage("Damn the dev didn't even finnish this properly!");
            console.log("Damn the dev didn't even finnish this properly!");
            break;
        default:
            hideMessage()
            console.log("...");
        break;
     }
    }
}

function showMessage(message) {
    mainCharSpeech.innerHTML = message;
    mainCharSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4000);
}

function hideMessage() {
    mainCharSpeech.innerHTML = "...";
    mainCharSpeech.style.opacity = 0;
}