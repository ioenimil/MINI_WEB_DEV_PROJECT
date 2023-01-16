const Btn = document.querySelector('.btn')
Btn.addEventListener('mouseover', (event)=>{
    const x = (event.pageX - Btn.offsetLeft)
    console.log(x)
    
    const y = (event.pageY - Btn.offsetTop)
    console.log(y)
    Btn.style.setProperty('--x', String(x) + 'px')
    Btn.style.setProperty('--y', String(y) + 'px')
})