var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function geturl(text){
    return serverurl + "?" + "text=" + text
}
 
function errorrhandler(error){
    console.log("error occured ", error);
    alert("there is error in server please try again");
}

function clickhandler(){
      var answer= txtinput.value;
      fetch(geturl(answer))
      .then(response => response.json())
      .then(json => {
        output.innerText= json.contents.translated;
      })
      .catch(errorrhandler)
};
btnTranslate.addEventListener("click", clickhandler)