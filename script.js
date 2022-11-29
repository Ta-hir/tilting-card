document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const card = document.querySelector('.card')

    // others
    const title = document.querySelector('.title')

    const sneaker = document.querySelector('.sneaker img')
    const purchasebtn = document.querySelector('.purchase button')
    const description = document.querySelector('.info h3')
    const sizesbtns = document.querySelectorAll('.size button')
    // console.log(sizesbtns)



    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10
        let yAxis = (window.innerHeight / 2 - e.pageY) / 10
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

    })


    // animate in
    container.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none'

        title.style.transform = 'translatez(200px)'
        sneaker.style.transform = 'translatez(200px) rotatez(-45deg)'
    })



    // animate out
    container.addEventListener('mouseleave', (e) => {
        card.style.transition = 'all 0.5s ease'
        card.style.transform = `rotateY(0deg) rotateX(0deg)`

        title.style.transform = 'translateZ(0px)'
        sneaker.style.transform = 'translatez(0px) rotatez(0deg)'

    })

    sizesbtns.forEach((btn) => btn.addEventListener('click', (e) => {
        e.target
        removeActive()
        btn.classList.add('active')
    }))



    function removeActive() {
        sizesbtns.forEach((btn) => btn.classList.remove('active'))
    }



















})
