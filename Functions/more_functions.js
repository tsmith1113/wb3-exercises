"use strict"

function displayMialingLable(name,address,city,state,zip){
console.log(name);
console.log(address);
console.log(city);
console.log(state);
console.log(zip);
}

function addNumbers(num1, num2){
   let answer = Number(num1) + Number(num2);
   console.log(num1 + "+ " +num2+ "=" + answer);
}

displayReceipt(totalDue, amountPaid){

let changeDue = totalDue - amountPaid;
console.log("Total Due: $ " +totalDue);
console.log("Amount Paid: $" +amountPaid);
console.log("Change Due: "+changeDue);
}
console.log("---------------------------------------------")

displayMailingLabel("MIDO", "4600 E. Ponce De Leon Ave", "Clarkston", "Georgia", "30021");

console.log("---------------------------------------------")

displayMailingLabel("NAJ", "4440 Williams. Street", "Clarkston", "Georgia", "30021");

console.log("---------------------------------------------")

addNumbers(8,5);

console.log("---------------------------------------------")

addNumbers(500,354);

console.log("---------------------------------------------")

displayReceipt(2800, 1300);

console.log("---------------------------------------------")

displayReceipt(2800, 2800);

console.log("---------------------------------------------")

displayReceipt(2800, 3300);

console.log("---------------------------------------------")