 // Check login status
    let isLoggedIn = false;

document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    if (email === '' || password === '') {
        alert('Please fill your email and password for logging in.');
    } else {
        isLoggedIn = true;
        document.getElementById('login-success-message').style.display = 'block';
        setTimeout(function() {
            document.getElementById('login-success-message').style.display = 'none';
        }, 2000);
    }
});

function validateForm(event) {
    if (!isLoggedIn) {
        event.preventDefault();
        alert('Please log in before placing an order.');
    } else {

        // Check if all required fields are filled
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('form18').value;
        const email = document.getElementById('form19').value;
        const country = document.getElementById('country').value;
        const address1 = document.getElementById('form14').value;
        const postcode = document.getElementById('form16').value;
        const city = document.getElementById('form17').value;
        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (!firstName || !lastName || !phone || !email || !country || !address1 || !postcode || !city || !cardName || !cardNumber || !expiryDate || !cvv) {
            alert('Please fill out all required fields before placing your order.');
            return;
        } else {
            window.location.href = 'orderplaced.html';
        }
    }
}

