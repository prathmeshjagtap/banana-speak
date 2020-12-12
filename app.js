var transalte = document.querySelector("#button_translate");
var textInput = document.querySelector("#text-input");
var Output = document.querySelector("#output");

function clickHandler() {
  Output.innerText = textInput.value;
}

transalte.addEventListener("click", clickHandler);
