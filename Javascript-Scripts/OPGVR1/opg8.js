// opg8.js
'use strict';

// Main function
function main() {
    let number = prompt("Write a number:")
    let sum = 1;
        for (let i = 1; i <= number; i++) {
            if(i%3===0) {
                 document.writeln(sum + " + " + i + " = " + (sum + i) + "<br>");
                 sum += i;
            }3
        }
}

// Run main
main();