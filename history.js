const passwordsList = document.querySelector("#passwords-list")
const clearHistory = document.querySelector("#clear-history")

function renderPasswords(){
    const x = JSON.parse(localStorage.getItem("saved-passwords")) || []
    let passwordContent = ``
    if (x && x.length > 0) {
      for (let i = 0; i < Number(x.length); i++) {
        passwordContent += `<li>${x[i]}</li>`;
      }
      passwordsList.innerHTML = passwordContent;
    } else {
      passwordsList.innerHTML = `<li>No saved passwords</li>`;
    }
}

renderPasswords()
clearHistory.addEventListener("click",()=>{
    localStorage.clear()
    renderPasswords()
})