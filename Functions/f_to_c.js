"use strict";

function convertFtoC(fahrenheit){
    let celsius;

    celsius = (fahrenheit - 32) * (5/9);

    return celsius;
}

let currentTemp = 90;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp);
