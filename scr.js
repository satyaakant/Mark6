var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

console.log(textInput)

function clickhandler(){
    console.log("clicked!");
    console.log("input", textInput.value);
};

btnTranslate.addEventListener("click",clickhandler)