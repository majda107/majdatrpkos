var PARALLAX_SENSITIVITY = 100

var offsetX = 0
var offsetY = 0

function reset() {
    offsetX = 0
    offsetY =0
}


var navbar = null

document.addEventListener('DOMContentLoaded', () => {
    var parallax = Array.from(document.querySelectorAll('.parallax'))
    navbar = document.querySelector('.navbar')

    document.addEventListener('mouseleave', reset)
    document.addEventListener('mouseenter', reset)
    document.addEventListener('mousemove', (e) => {
        offsetX -= e.movementX / PARALLAX_SENSITIVITY
        offsetY -= e.movementY / PARALLAX_SENSITIVITY

        parallax.forEach(el => {
            el.style.marginLeft = `${offsetX}px`
            el.style.marginTop = `${offsetY}px`
        })
    })
})

function collapse() {
    navbar.classList.toggle('active')
}

