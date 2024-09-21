// Search --> form submit reload the page

document.getElementById('login-btn').addEventListener('click',(e)=> {
    e.preventDefault()
    

    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber)

})