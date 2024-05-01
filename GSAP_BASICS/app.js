// GSAP method 1 : gsap.to('selector' , animations)
// when we want our element to move from inital to final position 
// gsap.to("#box", {
//   //  animations in key-value pairs form
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate:360,
//   backgroundColor:"blue",
//   borderRadius:'100%',
//   scale:2
// });


// gsap.from() :- Used to move element from final to initial position
// gsap.from("#box", {
//     //  animations in key-value pairs form
//     x: 1000,
//     duration: 2,
//     delay: 5,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:'100%',
//     scale:2
//   });




// What if we have same type of element , suppose three h1's then how do we animate them
// Iff we do in thios way below it will apply the animation on each and every h1


// gsap.from('h1',{
//     color:"red",
//     duration:2,
//     delay:1
// })

// To apply on individual element we have a property called "stagger"

// Stagger value is negative means the animation will occure in reverse means last element is animated first and
// First is animated lastly

// gsap.from('h1',{
//    y:20,
//    opacity:0,
//    stagger:-1
// })

// Repeat :- It is used when we want our animation to repeat continousely .
// if we give value equal to 1 : - Means animation will repeat one more time after the animation is done
// For infinite repeat we use the the value of the repeat equal to -1 <---------- important

// gsap.from('h1',{
//     y:20,
//     opacity:0,
//     stagger:-1,
//     repeat:2
//  })


// yoyo :-See when we use repeat , it goes to end and again start from the beginning ,  if we want to be a good
// animation to start to end --> then to start form end toward start and repeat this , we use 'YOYO' property


// gsap.from('#box',{
//     x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate:360,
//   backgroundColor:"blue",
//   borderRadius:'100%',
//   scale:2,
//     // repeat:-1,
//     yoyo :true
//  })


//  ----------------------------------- TimeLine in GSAP ---------------------------------- 
// Lets apply timeline to nav-bar

// let tl = gsap.timeline()
// tl.from('.logo',{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:0.3
// })
// tl.from('li',{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:0.3,
//     stagger:0.5
// })
// tl.from('#hero',{
//     opacity:0 ,
//     scale:0.5,
//     duration:0.5

// })


// ------------------------------> Scroll Trigger <--------------------------



// If we want our animation to run if the user scroll to that page then we use scrool trigger
// The animation will start as the user scroll to certain page


// Method 1 :- Using the simple name of the selector 

// gsap.from('.page1 .box' , {
//     opacity:0,
//     duration:2,
//     delay:1,
//     borderRadius : '100%',
//     rotate:360
// })
// gsap.from('.page2 .box' , {
//     opacity:0,
//     duration:2,

//     borderRadius : '100%',
//     rotate:360,
//     scrollTrigger : '.page2 .box'
// })
// gsap.from('.page3 .box' , {
//     opacity:0,
//     duration:2,

//     borderRadius : '100%',
//     rotate:360,
//     scrollTrigger : '.page3 .box'
// })

// Method 2:- Using some of the scrollTrigger related properies

// gsap.from('.page1 .box' , {
//     opacity:0,
//     duration:2,
//     delay:1,
//     borderRadius : '100%',
//     rotate:360
// })
// gsap.from('.page2 .box' , {
//     opacity:0,
//     duration:2,
//     borderRadius : '100%',
//     rotate:360,
//     scrollTrigger : {
//         trigger:'.page2 .box',
//         scroller : 'body',
//         markers:true,
//         start : "top 40%"
//     }
// })


// But jaise hi start match hota hai toh animation chal jata hai aur khatma hojata hai
// We want animation to happen as we are scrolling the page not soon after the trigger

// -------------------------------> Scrub property of scroll trigger
// value  of scrub can be true or from [0-5] ke bich me according to smoothness

// gsap.from('.page2 .box' , {
//     opacity:0 ,
//     scale:0 ,
//     rotate : 270,
//     duration: 2 ,
//     borderRadius : '100%',
//     scrollTrigger :{
//         trigger:'.page2',
//         scroller:'body',
//         markers:true ,
//         start:'top 50%',
//         end:'top 20%',
//         scrub:5,

// // New property of the scroll trigger is -------> pin used to pin the page or say parent element until the animation of the child ends
//     pin :true 
//     }
// })




