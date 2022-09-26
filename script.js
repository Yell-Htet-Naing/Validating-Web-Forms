let form = document.getElementById("form");

let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("pwd");
let phone = document.getElementById("telephone");
let bio = document.getElementById("bio");

form.addEventListener("submit",e=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let phoneValue = phone.value.trim();
    let bioValue = bio.value.trim();

    if(firstNameValue === "") {
        setErrorFor( firstname, "First name cannot be blank");
    } else if(!isName(firstNameValue)) {
        setErrorFor(firstName, "First name must be alphanumeric and contain 4-16 characters");
    }else {
        setSuccessFor(firstName);
    }

    
    if(lastNameValue === "") {
        setErrorFor( lastname, "last name cannot be blank");
    } else if(!isName(lastNameValue)) {
        setErrorFor(lastName, "last name must be alphanumeric and contain 4-16 characters");
    }else {
        setSuccessFor(lastName);
    }

    if(emailValue === "") {
        setErrorFor( email, "email cannot be blank");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email must be a valid address e.g example@example.com");
    }else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrorFor( password, "password cannot be blank");
    } else if(!isPassword(passwordValue)) {
        setErrorFor(password, "password must be alphanumeric and between 6-20 characters");
    }else {
        setSuccessFor(password);
    }

    if(phoneValue === "") {
        setErrorFor( phone, "telephone cannot be blank");
    } else if(!isPhone(phoneValue)) {
        setErrorFor(phone, "a valid telephone number 12 digit(eg-969*********)");
    }else {
        setSuccessFor(phone);
    }

    if(bioValue === "") {
        setErrorFor( bio, "bio cannot be blank");
    } else if(!isBio(bioValue)) {
        setErrorFor(bio, "bio must contain lowercase letters, underscores,hyphens and 8-20 characters");
    }else {
        setSuccessFor(bio);
    }
 

}

function setErrorFor(input,message) {
    let formControl = input.parentElement;
    let p = formControl.querySelector("p");
    formControl.className = 'form-control error';
    p.innerText = message;
}

function setSuccessFor(input){
    let formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isName(n) {
    return /^[a-zA-Z][a-zA-Z0-9!@#$%^&*_-]{3,16}$/.test(n);
}
function isEmail(e) {
    return /^[a-zA-Z0-9"_][a-zA-Z0-9!@#$%^&*_".+-]{3,29}/.test(e);
}
function isPassword(p) {
    return /[a-zA-Z0-9!@#$%^&*?]{6,20}/.test(p);
}
function isPhone(P) {
    return /^[9][69]{2}[0-9]{9}/.test(P);
}
function isBio(b) {
    return /^[a-z0-9][a-z_-]{7,50}/.test(b);
}

