document.getElementById("mainTitle").innerText = "Point and Click adventure";
const offsetCharacter = 16;
const sec = 1000;
const gameWindow = document.getElementById("gameWindow");
const mainChar = document.getElementById("mainChar");

const mainCharSpeech = document.getElementById("mainCharSpeech");

gameWindow.onclick = function (e) {
    if (mainCharSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        mainChar.style.left = x - offsetCharacter + "px";
        mainChar.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);
        switch (e.target.id) {
            case "funeral1":
                showMessage("Who rest here?..");
                break;
            case "door2":
                showMessage("Nobody is here... what should I do?");
                break;
            default:
                hideMessage();
                break;
        }
    }
}

function showMessage(message) {
    mainCharSpeech.innerHTML = message;
    mainCharSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec);
}

function hideMessage() {
    mainCharSpeech.innerHTML = "...";
    mainCharSpeech.style.opacity = 0;
}