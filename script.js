const button = document.querySelector(".button")
const screen = document.querySelector(".main")
const value = document.querySelector(".color")
const colors = ["salmon", "crimson", "red", "pink", "deeppink", "mediumvioletred", "coral", "orangered", "orange", "gold", "yellow", "lavender", "violet", "fuchsia", "magenta", "darkviolet", "purple", "indigo", "slateblue", "lime", "chartreuse", "springgreen", "seagreen", "green", "olive", "aquamarine", "cyan", "aqua", "teal", "turquoise", "blue", "navy", "bisque", "wheat", "gray", "silver", "antiquewhite", "beige", "peru", "chocolate", "white", ]

button.addEventListener("click", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    screen.style.background = randomColor
    value.textContent = randomColor.toUpperCase()
    value.style.color = randomColor
})