let showPasswordButton = document.querySelector(".showPasswordButton");
let showPasswordEyeIcon = document.querySelector(".showPasswordEyeIcon");
let passwordField = document.querySelector("#password");

showPasswordButton.addEventListener('click', () => {
    let newType = passwordField.type === "password" ? "text" : "password";
    passwordField.type = newType;
    let newSrc = newType === "text" ? "images/not-visible.png" : "images/visibility.png"
    showPasswordEyeIcon.src = newSrc;
    showPasswordButton.setAttribute("aria-pressed", newType === "text");
})













