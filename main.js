
let opacityText = document.querySelectorAll(".text .text-1")

opacityText.forEach((e) => {
    e.onclick = () => {
        e.classList.toggle("opacity")
    }
})

