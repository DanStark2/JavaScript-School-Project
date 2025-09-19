'use strict';

function main() {
    const cookie = document.getElementById('cookie');
    const num = document.getElementById('numberC');
    let numValue = 0;

    cookie.addEventListener('click', () => {
        console.log("Clicked")
        numValue++;
        num.textContent = numValue;
    });
}

main();
