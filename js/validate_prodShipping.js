


const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;
    const zip = document.getElementById('zip').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;

    const formData = {
        name: name,
        surname: surname,
        phonenumber: phonenumber,
        email: email,
        zip: zip,
        address: address,
        state: state
    };

    if (validateForm()) {
        // Generate a unique identifier for the form submission
        const timestamp = Date.now();
        const cookieName = `formData_${timestamp}`;

        // Get the existing form data cookies
        const existingFormDataCookies = getFormDataCookies();

        // Check if a cookie with the same name already exists
        if (getCookie(cookieName) !== null) {
            // Update the existing cookie value
            existingFormDataCookies[cookieName] = formData;
        } else {
            // Add the new cookie to the existing cookies
            existingFormDataCookies[cookieName] = formData;
        }

        // Set the merged form data as cookies
        for (const [name, value] of Object.entries(existingFormDataCookies)) {
            document.cookie = `${name}=${JSON.stringify(value)}; expires=${new Date(Date.now() + 86400e3).toUTCString()}`;
        }
    }
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

    function getFormDataCookies() {
        const cookies = document.cookie.split(';');
        const formDataCookies = {};

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('formData_')) {
                const cookieName = cookie.substring(0, cookie.indexOf('='));
                const cookieValue = JSON.parse(cookie.substring(cookie.indexOf('=') + 1));
                formDataCookies[cookieName] = cookieValue;
            }
        }

        return formDataCookies;
    }

});

function validateForm() {
    const nameInput = document.forms["myForm"]["name"].value;
    const nameError = document.getElementById('nameError')
    if (nameInput == "" || nameInput == null || !isNaN(nameInput)) {
        nameError.style.display = "block"
        return false;
    }

    const surnameInput = document.forms["myForm"]["surname"].value;
    const surnameError = document.getElementById('surnameError')
    if (surnameInput == "" || surnameInput == null || !isNaN(surnameInput)) {
        surnameError.style.display = "block"
        return false;
    }
    const phoneInput = document.getElementById("phonenumber");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.style.display = "block";
        return false;
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = "block";
        return false;
    }

    const postInput = document.forms["myForm"]["zip"].value;
    const postError = document.getElementById('postError')
    if (postInput == "" || postInput == null || isNaN(postInput)) {
        postError.style.display = "block"
        return false;
    }

    const addressInput = document.forms["myForm"]["address"].value;
    const addressError = document.getElementById('addressError')
    if (addressInput == "" || addressInput == null || !isNaN(addressInput)) {
        addressError.style.display = "block"
        return false;
    }

    const stateInput = document.forms["myForm"]["state"].value;
    const stateError = document.getElementById('stateError')
    if (stateInput == "" || stateInput == null) {
        stateError.style.display = "block"
        return false;
    }
    window.location.href = "checkout_page.html";
    return true;
}
