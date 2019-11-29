import { gsap } from 'gsap'
import ScrollMagic from 'ScrollMagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);

const controller = new ScrollMagic.Controller({addIndicators: true})


// HERO
const col2 = document.getElementById('col-2')


const lines = Array.from({ length: 500 }, () =>
document.createElement("div")
)
lines.forEach(div => {
  // gsap.to(div, {
  // marginTop: 1
  // })
  col2.appendChild(div)
})
gsap.to(lines, {
  opacity: 1,
  // marginTop: 1,
  stagger: {
    each: 0.015,
  }
})

// const divs = Array.from({ length: noOfLines }, () =>
// document.createElement("div")
// )
// divs.forEach(div => {
//   // gsap.to(div, {
//   // marginTop: 1
//   // })
//   col6.appendChild(div)
// })
// gsap.to(divs, {
//   opacity: 1,
//   // marginTop: 1,
//   stagger: {
//     each: .015,
//   }
// })




// SECTION 5 

const sampleLine = document.getElementById('sampleLine')


const circlegraphLinesPos = sampleLine.getBBox();


console.log('circlegraphLinesPos', circlegraphLinesPos)

const sect5Tl = gsap.timeline()

sect5Tl
  .from(".sect5-lines", { 
    opacity: 0, 
    y: '+=200', 
    transformOrigin: '50% 50%',
    ease: 'back.out',
    stagger: 0.125,})


  sect5Tl.pause()

new ScrollMagic.Scene({
  triggerElement: '#section5',
  duration: "70%",
  triggerHook: 0.5
  })
  .on("enter", function (e) {
    sect5Tl.play()
  })
  .on("leave", function (e) {
    sect5Tl.reverse()
  })
  .addIndicators()
  .addTo(controller)


// const sect7Tl = gsap.timeline()


// SECTION 7 - TRIANGLE PYRAMID
const triBlue = document.getElementById('blueTop')
const triBlack = document.getElementById('blackMiddle')
const triRed = document.getElementById('redCenter')

const bluePos = triBlue.getBBox();
const blackPos = triBlack.getBBox();
const redPos = triRed.getBBox();


console.log('bluePos', bluePos)
console.log('blackPos', blackPos)
console.log('redPos', redPos)



const triTl = gsap.timeline()

triTl
  .from(triBlack, { opacity: 0, scale: 5, transformOrigin: '50% 50%', ease: 'back.out', duration: 2 })
  .from(triRed, { opacity: 0, scale: 0, transformOrigin: '50% 50%', stagger: 0.5, ease: 'elastic.out(0.9, 0.3)', duration: 1 }, '+=.05')
  .from(triBlue, { opacity: 0, y: '-=200', stagger: '0.5', ease: 'bounce.out(0.5, 0.3)', duration: 1 }, '-=.5')

triTl.pause()

new ScrollMagic.Scene({
  triggerElement: '#section7',
  duration: "50%",
  triggerHook: 0.25
  })
  .on("enter", function (e) {
    triTl.play()
  })
  .on("leave", function (e) {
      triTl.reverse()
  })
  .addIndicators()
  .addTo(controller)
