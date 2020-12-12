var transalte = document.querySelector("#button_translate");
var textInput = document.querySelector("#text-input");

function clickHandler() {
  console.log("Clicked");
  console.log(textInput.value);
}

transalte.addEventListener("click", clickHandler);
