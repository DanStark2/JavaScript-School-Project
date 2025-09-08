// opg1.js
'use strict';

// Main function
function main() {
    let name = prompt("whats your name?")
    const button1 = document.getElementById("button1");

    button1.addEventListener("click",function(){
        alert(name)
    })
    // did some research and looked at how eventlisteners work
}

// Run main
main();