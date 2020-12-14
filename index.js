var inputnum = document.querySelector("#input");
var btnverify = document.querySelector("#verify-btn");
var outputDiv = document.querySelector("#Output");

function clickHandler() {
    var inputText = inputnum.value;

    var i, flag = true;
    var prime= "is prime";
    var noprime= "not prime";

    for( i = 2; i <= inputText - 1; i++) 
                if (inputText % i == 0) { 
                    flag = false; 
                    break; 
                } 
                  
            if (flag == true) 
                
                outputDiv.value = prime;
            else

            outputDiv.value = noprime;
    }

btnverify.addEventListener("click", clickHandler);  