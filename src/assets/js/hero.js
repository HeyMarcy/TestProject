import { gsap } from 'gsap'
import ScrollMagic from 'ScrollMagic'

const heroController = new ScrollMagic.Controller()


// HERO
const blueBar8 = document.getElementById('BlueBar8')
const paths = document.getElementsByClassName('path')
const bars = document.getElementsByClassName('bar')
const barIcons = document.getElementsByClassName('barIcon')

// gsap.set(blueBar8, {

//   // y: -200,
//   height: '5px',
// })

gsap.set([barIcons,paths], {
  opacity: 0,
})

// gsap.set(paths, {
//   opacity: 0,
// })

const heroTl = gsap.timeline()

heroTl
.from(bars, {
  opacity: 0,
  y: -800,

  // transformOrigin: '50% 50%',
  // ease: 'back.out',
  // stagger: 0.125,
})
.from(bars, {
  height: 5,

})
  // .from(blueBar8, {
  //   opacity: 0,
  //   y: -800,
  //   // transformOrigin: '50% 50%',
  //   // ease: 'back.out',
  //   // stagger: 0.125,
  // })
  // .from(blueBar8, {
  //   height: 5,
  //   // transformOrigin: '50% 50%',
  //   // ease: 'back.out',
  //   // stagger: 0.125,
  // })



// const lines = Array.from({ length: 500 }, () =>
// document.createElement("div")
// )
// lines.forEach(div => {
//   // gsap.to(div, {
//   // marginTop: 1
//   // })
//   col2.appendChild(div)
// })
// gsap.to(lines, {
//   opacity: 1,
//   // marginTop: 1,
//   stagger: {
//     each: 0.015,
//   }
// })

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