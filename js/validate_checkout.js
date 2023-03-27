// Define a function to retrieve the value of a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Define a function to retrieve the form data cookies
function getFormDataCookies() {
    const cookies = document.cookie.split(';');
    const formDataCookies = {};

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('formData')) {
            const cookieName = cookie.substring(0, cookie.indexOf('='));
            const cookieValue = JSON.parse(cookie.substring(cookie.indexOf('=') + 1));
            formDataCookies[cookieName] = cookieValue;
        }
    }

    return formDataCookies;
}

// Call the getFormDataCookies function to retrieve the form data cookies
const formDataCookies = getFormDataCookies();

// Loop through the form data cookies and display the form data
for (const [name, value] of Object.entries(formDataCookies)) {
    const outputDiv = document.getElementById("datalist");
    outputDiv.innerHTML = ` <span class="label">Name:</span> <span class="value">${value.name}</span><br>
                            <span class="label">Surname:</span> <span class="value">${value.surname}</span><br>
                            <span class="label">Phone Number:</span> <span class="value">${value.phonenumber}</span><br>
                            <span class="label">Email:</span> <span class="value">${value.email}</span><br>
                            <span class="label">Zip:</span> <span class="value">${value.zip}</span><br>
                            <span class="label">Address:</span> <span class="value">${value.address}</span><br>
                            <span class="label">State:</span> <span class="value">${value.state}</span><br>`;

}



const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // validate inputs
    const cardNumber = document.querySelector('#cardNumber').value.trim();
    const date = document.querySelector('#date').value.trim();
    const cvv = document.querySelector('#cvv').value.trim();
    const cardNumberError = document.getElementById('cardNumberError');

    if (cardNumber == "" || cardNumber == null || isNaN(cardNumber)) {
        cardNumberError.style.display = "inherit";
        return false;
    }
    const dateInput = document.getElementById("date");
    const dateError = document.getElementById("dateError");
    const dateRegex = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (!dateRegex.test(dateInput.value)) {
        dateError.style.display = "inherit";
        return false;
    }

    const cvvError = document.getElementById('cvvError')
    if (cvv == "" || cvv == null || isNaN(cvv) || cvv == /^\d{4}$/) {
        cvvError.style.display = "inherit"
        return false;
    }

    //send the data to our php script
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'checkout.php');
    xhr.onload = function () {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
            alert('Checkout successful!');
        } else {
            alert(response.message);
        }
    };
    xhr.send(data);

});
