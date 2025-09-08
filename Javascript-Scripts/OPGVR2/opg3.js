// opg3.js
'use strict';

// Main function
function main() {
    const b1 = document.getElementById("b1")
    let num = Math.floor(Math.random() * 5) + 1;
    let correct = "your opinion is correct"
    let incorrect = "your opinion is not valid"

    b1.addEventListener("click", function() {
        if (num == 1) {
            alert(correct);
        } else {
            alert(incorrect);
        }
    });

    b2.addEventListener("click", function() {
        if (num == 2) {
            alert(correct);
        } else {
            alert(incorrect);
        }
}
}

// Run main
main();