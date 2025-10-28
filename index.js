const chars = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                "N", "O", "P", "Q", "U", "R", "S", "T", "U","V", "Y", "X", "Y", 
                "Z", "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", 
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 
                "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "-", 
                "+", "=", "{", "}", "[", "]", "\\", "\"", "'", ":", ";", ".",",", 
                "/", "?", ">", "<", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passwordLength = document.getElementById("password-length")

function generatePassword(){
    password1.textContent = "";
    password2.textContent = "";

    passwordLength.value = passwordLength.value>15? passwordLength.value : 15

    for (let i = 0; i < passwordLength.value; i++){
        let randomIndex1 = Math.floor(Math.random()*chars.length);
        let randomIndex2 = Math.floor(Math.random()*chars.length)
        password1.textContent += chars[randomIndex1];
        password2.textContent += chars[randomIndex2];
    }
    passwordLength.value = ""
}

function copyOnClick1(){
    navigator.clipboard.writeText(password1.textContent);
}

function copyOnClick2(){
    navigator.clipboard.writeText(password2.textContent);
}