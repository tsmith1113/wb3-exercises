"use strict";

function getSocSecTax(grossPay){
    let SocSecTax = (grossPay * 6.2) / 100;
    return SocSecTax;
}
function getMedicareTax(grossPay){
    let MedicareTax = (grossPay * 1.45) / 100;
    return MedicareTax;
}

function getFederalTx(grossPay,withholdingCode)

{
    let taxRate;
    if(withholdingCode == 0){
      taxRate = 23;  
    }else if(withholdingCode == 1){
        taxRate = 21;
    }else if(withholdingCode == 2){
        taxRate = 19.5;
    }else if(withholdingCode == 3){
        taxRate = 18.5;
    }else if(withholdingCode >= 4)
    
   withholding = (grossPay * taxRate) / 100;
    return withholding;
}
 
