var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

function clickhandler(){
    output.innerText="me aste nu be" + txtinput.value;
};
btnTranslate.addEventListener("click", clickhandler)