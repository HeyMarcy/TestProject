import { gsap } from 'gsap'

let triTl = gsap.timeline();

triTl.to('.triangle', 2, { y: 100, backgroundColor: '#4f9d88' }, 0.05)
  .to('#blue-top', { duration: 2, top: '+=250px', rotation: 180, ease: 'expo.inOut'})

// const blueTriangle = document.getElementById('blue-top')