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
gsap.from('#box',{
    x: 1000,
  duration: 2,
  delay: 1,
  rotate:360,
  backgroundColor:"blue",
  borderRadius:'100%',
  scale:2,
    // repeat:-1,
    yoyo :true
 })
