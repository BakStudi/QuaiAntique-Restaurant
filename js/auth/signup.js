const inputName = document.getElementById("NameInput");
const inputFirstname = document.getElementById("FirstnameInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputConfirmPassword = document.getElementById("ConfirmPasswordInput");
const inputRegistrationForm = document.getElementById("registrationForm");

const btnSignupValidate = document.getElementById("btn-validate-signup");



inputName.addEventListener("keyup", validateForm);
inputFirstname.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputConfirmPassword.addEventListener("keyup", validateForm);

btnSignupValidate.addEventListener("click", registerUser);



function validateForm() {
    const nameOk = validateRequired(inputName);
    const firstnameOk = validateRequired(inputFirstname);
    const emailOk = validateEmail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const confirmPasswordOk = validateConfirmPassword(inputPassword, inputConfirmPassword);

    if (nameOk && firstnameOk && emailOk && passwordOk && confirmPasswordOk) {
        btnSignupValidate.disabled = false;
    } else {
        btnSignupValidate.disabled = true;
    }
}

function validateConfirmPassword(inputPwd, inputConfirmPwd) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if ((inputPwd.value == inputConfirmPwd.value) && (inputConfirmPwd.value.match(passwordRegex))) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailUser = input.value;
    if (emailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function registerUser() {
    let dataForm = new FormData(inputRegistrationForm);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // ******** Récupérer les données des champs de la page signup ********
    const raw = JSON.stringify({
        "firstName": dataForm.get("firstname"),
        "lastName": dataForm.get("name"),
        "email": dataForm.get("email"),
        "password": dataForm.get("password")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"registration", requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Erreur lors de l'inscription !");
            }
        })
        .then((result) => {
            alert("Bravo "+ dataForm.get("firstname") + ", vous êtes maintenant inscrit, vous pouvez vous connecter. ")
            document.location.href="/signin";
        })
        .catch((error) => console.error(error));
}