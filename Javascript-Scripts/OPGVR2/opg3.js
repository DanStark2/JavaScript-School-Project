// opg3.js
'use strict';

// Main function
function main() {
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");
    const b5 = document.getElementById("b5");

    let num = Math.floor(Math.random() * 5) + 1;
    let correct = "your opinion is correct";
    let incorrect = "your opinion is not valid";

    b1.addEventListener("click", function() {
        if (num === 1) {
            alert(correct);
            color(1)
            timeout(800, END_IT_ALL)
        } else {
            alert(incorrect);
            color(0)
        }
    });

    b2.addEventListener("click", function() {
        if (num === 2) {
            alert(correct);
            color(1)
        } else {
            alert(incorrect);
            color(0)
        }
    });

    b3.addEventListener("click", function() {
        if (num === 3) {
            alert(correct);
            color(1)
        } else {
            alert(incorrect);
            color(0)
        }
    });

    b4.addEventListener("click", function() {
        if (num === 4) {
            alert(correct);
            color(1)
        } else {
            alert(incorrect);
            color(0)
        }
    });

    b5.addEventListener("click", function() {
        if (num === 5) {
            alert(correct);
            color(1)
        } else {
            alert(incorrect);
            color(0)
        }
    });
}
let color = function(col){
    if(col===0) {
        document.body.style.backgroundColor = "red";
    }
    else if (col===1) {
        document.body.style.backgroundColor = "green";
    }
}



let timeout = function(time, callback){
    const id = setTimeout(callback, time);
    return id;
}

let END_IT_ALL = function(){
    location.reload();
}
main();