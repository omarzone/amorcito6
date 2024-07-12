
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "ceviche" && password == "ceviche") {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("Oh no!", "No puedo dejarte entrar :(, solo la verdadera Nahomy Santos sabe como entrar")
}
