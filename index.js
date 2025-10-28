const chars = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                "N", "O", "P", "Q", "U", "R", "S", "T", "U","V", "Y", "X", "Y", 
                "Z", "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", 
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 
                "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "-", 
                "+", "=", "{", "}", "[", "]", "\\", "\"", "'", ":", ";", ".",",", 
                "/", "?", ">", "<", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|"];

let passwordEl = document.getElementById("passwords-el")
let passwordLength = document.getElementById("password-length")

function generatePassword(){
    passwordEl.innerHTML = `
            <p id="password1" onclick="copyOnClick1()" class="password"></p>
            <p id="password2" onclick="copyOnClick2()" class="password"></p>
        `;
        
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    password1.innerHTML = "";
    password2.innerHTML = "";

    passwordLength.value = passwordLength.value>15? passwordLength.value : 15

    for (let i = 0; i < passwordLength.value; i++){
        let randomIndex1 = Math.floor(Math.random()*chars.length);
        let randomIndex2 = Math.floor(Math.random()*chars.length)
        password1.innerHTML += chars[randomIndex1];
        password2.innerHTML += chars[randomIndex2];
    }
    passwordLength.value = ""
}

function copyOnClick1(){
    navigator.clipboard.writeText(password1.textContent);
}

function copyOnClick2(){
    navigator.clipboard.writeText(password2.textContent);
}