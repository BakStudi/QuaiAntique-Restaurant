const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");

const btnSignin = document.getElementById("SigninBtn");

btnSignin.addEventListener("click", checkCredentials);



function checkCredentials() {
    // Ici il faudra appeler l'API pour vérifier les credentials en BDD

    if (inputEmail.value == "test@mail.com" && inputPassword.value == "azerty") {

        // Il faudra récupérer le vrai token
        const token = "jkhfvbsvnv,nloevhieuvbhuzeihezeiocheziuzucegigfcouz";
        setToken(token);

        // Placer ce token en cookie

        setCookie(roleCookieName, "client", 7);
        window.location.replace("/");
    } else {
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}