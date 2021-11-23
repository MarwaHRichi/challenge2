
var validation = document.getElementById("inscrire")
var valid = document.getElementById("nom");
var message = document.getElementById("invalid");
validation.addEventListener("click", register);
function register(e) {
    if (valid.validity.valueMissing){
        e.preventDefault();
        message.textContent = "obligatoir";
        message.style.color ="red";
    }
}