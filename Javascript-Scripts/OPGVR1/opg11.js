// opg11.js
'use strict';

// Main function
function main() {
    let num1 = prompt("Enter the number:");
for (let i =1; i <= num1; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        document.writeln("FizzBuzz")
    }
    else if (i % 3 === 0) {
        document.writeln("Fizz")
    
    } else if (i % 5 === 0){
        document.writeln("Buzz")
    }
    else {
        document.writeln(i)
    }

}
}
// Run main
main();