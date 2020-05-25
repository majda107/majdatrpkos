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

function available() {
    alert('Not available yet!')
}




let lightTheme = {
    '--elevate-color': '#ededed',
    '--background-color': '#fffff',

    '--text-dark': '#5F5F5F',
    '--text-black': '#3C3C3C',
    '--text-light': '#666666',

    '--color-light': '#EEEEEE',
    '--color-black': '#161616',
    '--color-dark': '#707070',

    '--inversion-filter': 'invert(0)',
    '--picture-url': 'url(../../res/majda.png)'
}

let darkTheme = {
    '--elevate-color': '#020202',
    '--background-color': '#0B0B0B',

    '--text-dark': '#F9F9F3',
    '--text-black': '#F9F9F3',
    '--text-light': '#F9F9F3',

    '--color-light': '#1f1d1d',
    '--color-black': '#161616',
    '--color-dark': '#707070',

    '--inversion-filter': 'invert(0.8)',
    '--picture-url': 'url(../../res/majda-dark.png)'
}



function setTheme(theme) {
    for(let key in theme) {
        document.documentElement.style.setProperty(key, theme[key])
    }
}




let activeIndex = 0
let activeThemes = [ lightTheme, darkTheme ]

function cycleThemes() {
    activeIndex += 1
    if(activeIndex >= activeThemes.length)
        activeIndex = 0

    setTheme(activeThemes[activeIndex])
}

// set base theme
setTheme(activeThemes[activeIndex])





window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-156174690-1');