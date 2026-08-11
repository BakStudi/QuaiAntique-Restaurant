const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputSigninForm = document.getElementById("signinForm");

const btnSignin = document.getElementById("SigninBtn");

btnSignin.addEventListener("click", checkCredentials);



function checkCredentials() {
    let dataForm = new FormData(inputSigninForm);

    // Appeler l'API pour vérifier les credentials en BDD
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // ******** Récupérer les données des champs de la page signup ********
    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("password")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"login", requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                inputEmail.classList.add("is-invalid");
                inputPassword.classList.add("is-invalid");
            }
        })
        .then((result) => {
            // Récupération du token
            const token = result.apiToken;
            setToken(token);

            // Placer ce token en cookie ainsi que le rôle
            setCookie(roleCookieName, result.roles[0], 7);
            window.location.replace("/");
        })
        .catch((error) => console.error(error));
}
