let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let passwords = document.querySelectorAll('input[type="password"]');
function markPasswordInvalid() {
    password.setCustomValidity("Passwords do not match");
    passwords.forEach((passwordField) => {
        passwordField.classList.add('error');
    })
}

function markPasswordValid() {
    password.setCustomValidity("");
    passwords.forEach((passwordField) => {
        passwordField.classList.remove('error');
    })
}

passwords.forEach((passwordField) => {
    passwordField.addEventListener('keyup', () => {
        if (password.value !== confirmPassword.value) {
            markPasswordInvalid();
        } else if (password.value === confirmPassword.value) {
            markPasswordValid();
        }
    })
})
