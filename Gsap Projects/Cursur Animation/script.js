const cursur = document.querySelector('.cursur')
const main = document.querySelector('.main')
const image = document.querySelector('.image-container')



main.addEventListener('mousemove',(e)=>{
gsap.to(cursur,{
    x:e.x ,
    y:e.y,
    duration:0.2,

})
})

image.addEventListener('mouseenter',()=>{
    cursur.innerHTML = "View More"
    gsap.to(cursur,{
        scale:2
    })
})
image.addEventListener('mouseleave',()=>{
    cursur.innerHTML = ""
    gsap.to(cursur,{
        scale:1
    })
})