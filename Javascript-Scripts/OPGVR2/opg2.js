// opg2.js
'use strict';

// Main function
function main() {
    const title = document.getElementById("title");
    if (title) {
        title.addEventListener("mouseenter", () => {
            title.style.color = "white";
            title.style.backgroundColor = "orange";
        });
        title.addEventListener("mouseleave", () => {
            title.style.color = "blue";
            title.style.backgroundColor = "red";
        });
    } else {
        console.error('Element with id "title" not found.');
    }
}

// Run main
main();