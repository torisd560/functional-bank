document.getElementById('deposit-button').addEventListener('click', function(){
    bankAccountCalculate('deposit')
});

document.getElementById('withdraw-button').addEventListener('click',function(){
    bankAccountCalculate('withdraw')
});
function bankAccountCalculate (type){
    const inputField = document.getElementById(type +'-input');
    let inputFieldAmount = inputField.value;
    inputFieldAmount = Number(inputFieldAmount);

    // update  total
    const totalAmount = document.getElementById(type +'-total');
    let previousTotalAmount = totalAmount.innerText;
    previousTotalAmount = Number(previousTotalAmount)
    totalAmount.innerText= inputFieldAmount;
    
    // update  total amount 
    const updateTotalAmount = previousTotalAmount + inputFieldAmount;
    totalAmount.innerText= updateTotalAmount;
    inputField.value='';
    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotal = balanceTotal.innerText;
    previousBalanceTotal = Number(previousBalanceTotal);
    if (type =='deposit'){
        const updateBalancetotal= previousBalanceTotal + inputFieldAmount;
        balanceTotal.innerText = updateBalancetotal;
    }
    else {
    const updateBalancetotal= previousBalanceTotal - inputFieldAmount;
    balanceTotal.innerText = updateBalancetotal;
   } 
}