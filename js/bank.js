// deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
       if (amount>0){
        updateTotal('deposit-total', amount)
        updateBalanceTotal()
       }
       else{
           alert('your input amount invalid')
       }
});
// withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
   const amount= getInputValue('withdraw-input');
   const balanceTotal = getInnerTextValue('balance-total')
   if (amount>0 && balanceTotal>=amount){
    updateTotal('withdraw-total' , amount)
    updateBalanceTotal()
   }
    else{
    alert('your input amount invalid')
    }
});


// get input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const valueInText =inputField.value;
    const  value = Number (valueInText);
    inputField.value ='';
    return  value;
}
// common function for get innerText
function getInnerTextValue(totalId){
    const  total = document.getElementById(totalId);
    const totalValueText = total.innerText;
    const value = Number(totalValueText);
    return value;
}
// get total amount
function updateTotal(totalId ,amount){
    const total = getInnerTextValue(totalId);
    const newTotal = total + amount ;
    document.getElementById(totalId).innerText = newTotal;
}
// get balance total
/* function updateBalanceTotal(amount , isAdding){
    const balanceTotal = getInnerTextValue('balance-total');
    let newBalanceTotal;
        if (isAdding){
            newBalanceTotal = balanceTotal + amount;
        }
        else {
             newBalanceTotal = balanceTotal  - amount
        }
        document.getElementById('balance-total').innerText = newBalanceTotal;
} */
function updateBalanceTotal(){
    const depositTotal = getInnerTextValue('deposit-total');
    const withdrawTotal = getInnerTextValue('withdraw-total');
    const previousBalanceTotal = 1000;
    const newBalanceTotal = depositTotal - withdrawTotal + previousBalanceTotal;
    document.getElementById('balance-total').innerText = newBalanceTotal;
}
















































