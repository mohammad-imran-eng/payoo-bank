// Search --> form submit reload the page

document.getElementById('login-btn').addEventListener('click',(e)=> {
    e.preventDefault()
    

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '01883707751' && pinNumber === '1234'){
        window.location.href = '/home.html'
    }
    else {
        alert('wrong phone or pin. try agin')
    }


})

