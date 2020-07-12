const buttonSearch = document.querySelector("#page-home main a")
const modal = documentquerySelector("#modal")
const close = documentquerySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () =>{
    modal.classList.add("hide")
})