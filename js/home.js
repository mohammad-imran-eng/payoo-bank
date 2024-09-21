document.getElementById('add-money').addEventListener('click',()=>{
    let enterAmount = document.getElementById('enter-amount').value;
    let currentAmout = document.getElementById('current-amount').innerText;
    

    let fEnterAmount = parseInt(enterAmount);
    let fCurrentAmount = parseInt(currentAmout)

    let finalResult = fEnterAmount + fCurrentAmount;
    document.getElementById('current-amount').innerText = finalResult;
    document.getElementById('enter-amount').value = "";

})

document.getElementById('cashout').addEventListener('click',()=>{
    let enterAmount = document.getElementById('enter-amount').value;
    let currentAmout = document.getElementById('current-amount').innerText;
    

    let fEnterAmount = parseFloat(enterAmount);
    let fCurrentAmount = parseFloat(currentAmout)

    let finalResult = fCurrentAmount - fEnterAmount;
    document.getElementById('current-amount').innerText = finalResult;
    document.getElementById('enter-amount').value = "";

})