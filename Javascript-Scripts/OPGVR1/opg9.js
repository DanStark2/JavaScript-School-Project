// opg9.js
'use strict';

// Main function
function main() {
    let point = 0;
    alert("Ready?")
    let question1 = prompt("what is Dan's favorite Animal?")
    let question2 = prompt("what is Dan's favorite Animal?")
    let question3 = prompt("what is Dan's favorite Animal?")
    let question4 = prompt("what is Dan's favorite Animal?")
    let question5 = prompt("what is Dan's favorite Animal?")
    if (question1.toLowerCase === "dog") {
        point += 1;
    }
    if (question2 === "Dog") {
        point += 1;
    }
    if (question3 === "Dog") {
        point += 1;
    }
    if (question4 === "Dog") {
        point += 1;
    }   
    if (question5 === "Dog") {
        point += 1;
    }
    document.writeln("You got " + point + " points");
}

// Run main
main();