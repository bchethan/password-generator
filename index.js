const chars = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                "N", "O", "P", "Q", "R", "S", "T", "U","V",  "W", "X", "Y", 
                "Z", "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", 
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 
                "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "-", 
                "+", "=", "{", "}", "[", "]", "\\", "\"", "'", ":", ";", ".",",", 
                "/", "?", ">", "<", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|"];

const passwordEl = document.querySelector("#passwords-el")
let passwordLength = document.querySelector("#password-length")
const generateBtn = document.querySelector("#generate-btn")

let newPasswords = []
generateBtn.addEventListener("click", ()=>generatePassword())


function generatePassword(){
    passwordEl.innerHTML = `
            <p id="password1-el" class="password"></p>
            <p id="password2-el" class="password"></p>
        `;
        
    const password1El = document.querySelector("#password1-el");
    const password2El = document.querySelector("#password2-el");

    password1El.addEventListener("click", ()=>copyOnClick(password1El))
    password2El.addEventListener("click", ()=>copyOnClick(password2El))

    let passwordItem1 = ``;
    let passwordItem2 = ``;

    const length = Math.max(Number(passwordLength.value),15)

    for (let i = 0; i < length; i++){
        let randomIndex1 = Math.floor(Math.random()*chars.length);
        let randomIndex2 = Math.floor(Math.random()*chars.length)
        passwordItem1 += chars[randomIndex1];
        passwordItem2 += chars[randomIndex2];
    }
    password1El.innerHTML = passwordItem1;
    password2El.innerHTML = passwordItem2;
    storePasswords(passwordItem1)
    storePasswords(passwordItem2)
    passwordLength.value = ""
}

function copyOnClick(password){
    navigator.clipboard.writeText(password.textContent);
}

function storePasswords(password){
    let prevHistory = JSON.parse(localStorage.getItem("saved-passwords"));
    if(prevHistory){
        newPasswords = prevHistory;
        newPasswords.push(password);
        localStorage.setItem("saved-passwords", JSON.stringify(newPasswords));
    }else{
        newPasswords = [password];
        localStorage.setItem("saved-passwords", JSON.stringify(newPasswords));
    }
}

