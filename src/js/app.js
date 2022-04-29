const menuMobile = document.querySelector('#menu-mobile')
const navgation = document.querySelector('.nav-list')
document.body.style.overflow = 'hidden'

setTimeout(() => {
    document.body.style.overflowY = 'scroll'
    document.body.style.overflowX = 'hidden'
    
}, 7000)

function menuToggle(menu) {
    if (menu.classList.contains('nav-list')) {
        menu.classList.remove('nav-list')
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
        menu.classList.add('nav-list')
    }
}



menuMobile.onclick = () => {
    menuMobile.classList.toggle('is-active')
    menuToggle(navgation)
}


window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 1000) {
        navgation.classList.remove('active')
        navgation.classList.add('nav-list')
        menuMobile.classList.remove('is-active')
    }
})

window.addEventListener('load', () => {
    window.scrollTo(0, 0)
})