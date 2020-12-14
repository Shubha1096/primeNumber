var inputnum = document.querySelector("#input");
var btnverify = document.querySelector("#verify-btn");
var outputDiv = document.querySelector("#Output");

function clickHandler() {
    var inputText = inputnum.value;

    //if(inputText ==1){
       // outputDiv.innertext("Ok")
       return inputText;
    }

btnverify.addEventListener("click", clickHandler)