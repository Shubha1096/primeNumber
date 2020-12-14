var inputnum = document.querySelector("#input");
var btnverify = document.querySelector("#verify-btn");
var outputDiv = document.querySelector("#Output");

function clickHandler() {
    var inputText = inputnum.value;
    console.log(inputText);
    var myString = inputText; 
    var array = new Array();

    array = myString.split('-');

    var newDate = (array[2]);

    var isPrime = true;

    // check if number is equal to 1
    if (newDate === 1) {
        var ex0 = "1 is neither prime nor composite number."
        outputDiv.innerText = ex0;
    }
    
    // check if number is greater than 1
    else if (newDate > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < newDate; i++) {
            if (newDate % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            var ex1 =  "is a prime number"
            outputDiv.innerText = ex1;
        } else {
            var ex2 = "is a not prime number"
            outputDiv.innerText = ex2;
        }
    }
    
    // check if number is less than 1
    else {
        var ex3 = "The number is not a prime number."
        outputDiv.innerText = ex3;
    }
}   

btnverify.addEventListener("click", clickHandler);  