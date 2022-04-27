document.addEventListener('DOMContentLoaded', () => {

    const stream = document.querySelector('.gallery__stream')
    let items = document.querySelectorAll('.gallery__item')
    const prev = document.querySelector('.gallery__prev')
    const next = document.querySelector('.gallery__next')
    const bgBefore = document.styleSheets[0].cssRules[101]
    const bgAfter = document.styleSheets[0].cssRules[102]
    const timer = setTimeout

    const deleteBackground = () => {
        bgBefore.style.background = 'none'
        bgAfter.style.background = 'none'
    }


    const returnBackground = () => {
        bgBefore.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
        bgAfter.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
    }






    /*===== Events =====*/
    
    prev.onclick = () => {
        stream.insertBefore(items[items.length - 1], items[0])
        items = document.querySelectorAll('.gallery__item')
        deleteBackground()

        timer(returnBackground, 1000)

    }

    prev.onmouseover = () => {
        stream.insertBefore(items[items.length - 1], items[0])
        items = document.querySelectorAll('.gallery__item')

        deleteBackground()
        timer(returnBackground, 1000)

    }

    next.onclick = () => {
        stream.appendChild(items[0])
        items = document.querySelectorAll('.gallery__item')

        deleteBackground()
        timer(returnBackground, 1000)
    }

    next.addEventListener('mouseover', () =>{
        stream.appendChild(items[0])
        items = document.querySelectorAll('.gallery__item')

        deleteBackground()
        timer(returnBackground, 1000)
    })


})
