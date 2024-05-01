"use strict";

function convertCtoF(celsius){
    let fahrenheit;

    fahrenheit = (celsius - 32) * (5/9);

    return fahrenheit;
}

let currentTemp = 100;
let fahrenheitTemp = convertCtoF(currentTemp);
console.log(fahrenheitTemp);
