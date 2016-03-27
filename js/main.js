var div = document.createElement("div");
div.className = "output";
document.body.appendChild(div);

var spinTwoThree = new SpinTwoThree(document.querySelector("#spin-two-three"));
spinTwoThree.setCallbackStart(onSpinStart);
spinTwoThree.setCallbackComplete(onSpinComplete);

function onSpinStart(e) {
    div.innerHTML = "";
}

function onSpinComplete(e) {
    div.innerHTML = e.slots[0].getSlice(0).getAttribute("data-name");
}