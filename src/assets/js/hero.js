import { gsap } from 'gsap'
import ScrollMagic from 'ScrollMagic'

// const heroController = new ScrollMagic.Controller()

// HERO
const paths = document.getElementsByClassName('path')
const bars = document.getElementsByClassName('bar')
const barIcons = document.getElementsByClassName('barIcon')

gsap.set([barIcons, paths], {
  opacity: 0,
})

const heroTl = gsap.timeline()

heroTl
  .from(bars, {
    opacity: 0,
    y: -800,

})
  .from(bars, {
    height: 5,
})
