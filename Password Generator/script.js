function generatePassword() {
    let length = document.getElementById("length").value;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;

    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";

    let allChars = letters;

    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById("result").innerText = password;
}

function copyPassword() {
    let text = document.getElementById("result").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}