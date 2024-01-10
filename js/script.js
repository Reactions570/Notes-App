const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

console.log(notesContainer)
createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    img.src = "img/delete-svgrepo-com-optimized.svg";
    notesContainer.appendChild(inputBox).appendChild(img)
})
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage()
    } 
})

notesContainer.addEventListener("keyup", () => {
    if (notes != "") {
        updateStorage()
    }

})
notesContainer.addEventListener("keydown", event =>{
    if (event.key === "ENTER") {
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})