let passwordBox = document.getElementById("password");
let length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbol = "!@#$%^&*";
let allChars = upperCase + lowerCase + numbers + symbol;

// Function to store a password
let btn = document.getElementById("button");

btn.addEventListener('click', () => {
    passwordBox.value = createPassword();
});

function createPassword() {
    let password = "";
    
    // Ensuring at least one character from each category
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += symbol.charAt(Math.floor(Math.random() * symbol.length));
    
    // Fill up to the desired length
    while (password.length < length) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    return password;
}
