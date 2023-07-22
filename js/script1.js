const buttonUp = document.querySelector(".btn--up");
const buttonDown = document.querySelector(".btn--down");
const imgUp = document.querySelector(".ergonomics__img-top");

buttonUp.addEventListener("click", () => {
    if (!imgUp.classList.contains("up-js")) {
        imgUp.classList.add("up-js");
        imgUp.classList.remove("down-js");
    }
})

buttonDown.addEventListener("click", () => {
    if (imgUp.classList.contains("up-js")) {
        imgUp.classList.remove("up-js");
        imgUp.classList.add("down-js");
    }
})