import { gsap } from 'gsap'

const triBlue = document.getElementById('blueTop')
const triBlack = document.getElementById('blackMiddle')
const triRed = document.getElementById('redCenter')

const bluePos = triBlue.getBBox();
const blackPos = triBlack.getBBox();
const redPos = triRed.getBBox();


console.log('bluePos', bluePos)
console.log('blackPos', blackPos)
console.log('redPos', redPos)

let triTl = gsap.timeline();

triTl
  .from(triBlack, { opacity: 0, scale: 5, transformOrigin: '50% 50%', ease: 'back.out', duration: 2})
  .from(triRed, { opacity: 0, scale: 0, transformOrigin: '50% 50%', stagger: 0.5, ease: 'elastic.out(0.9, 0.3)', duration: 1 }, '+=.05')
  .from(triBlue, { opacity: 0, y: '-=200', stagger: '0.5', ease: 'bounce.out(0.5, 0.3)', duration: 1 }, '-=.5')
