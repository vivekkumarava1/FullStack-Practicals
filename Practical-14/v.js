var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement = document.getElementById("btn-decrement");

var number = 0;

// Function to change color of the number 
// If number is less than 0 color is red, if more than 0 color is green and if 0, color is pink.

function changeColor(number) {
    var color = "";
    if (number < 0) {
        color = "red";
    } else if (number > 0) {
        color = "green";
    } else {
        color = "pink";
    }
    return color;
}

btnIncrement.addEventListener("click", function() {
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function() {
    number--;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});