const passwordsList = document.querySelector("#passwords-list")
const clearHistory = document.querySelector("#clear-history")

function renderPasswords(){
    const x = JSON.parse(localStorage.getItem("saved-passwords")) || []
    let passwordContent = ``
    if (x && x.length > 0) {
        x.forEach(pass => {
            const li = document.createElement('li');
            li.textContent = pass;
            li.addEventListener("click",()=>copyOnClick(pass))
            passwordsList.appendChild(li)
        });
    } else {
      passwordsList.innerHTML = `<li>No saved passwords</li>`;
    }
}

renderPasswords()
clearHistory.addEventListener("click",()=>{
    localStorage.clear()
    renderPasswords()
})

function copyOnClick(password){
    navigator.clipboard.writeText(password);
}