var PARALLAX_SENSITIVITY = 100

var offsetX = 0
var offsetY = 0

function reset() {
    offsetX = 0
    offsetY = 0
}


var navbar = null

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".loader").classList.add('fade');

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

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('worker.js').then(function(response) {
            console.log('Registration Successful', response)
        }, function (error) {
            console.log('Registration Failed', error)
        })
    }
})


