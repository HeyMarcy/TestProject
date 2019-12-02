import { gsap } from 'gsap'
import ScrollMagic from 'ScrollMagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, gsap);

const controller = new ScrollMagic.Controller()
// const controller = new ScrollMagic.Controller({addIndicators: true})



// SECTION 5 

const sampleLine = document.getElementById('sampleLine')


const circlegraphLinesPos = sampleLine.getBBox()


console.log('circlegraphLinesPos', circlegraphLinesPos)

const sect5Tl = gsap.timeline()

sect5Tl
  .from('.sect5-lines', {
    opacity: 0,
    y: '+=200',
    transformOrigin: '50% 50%',
    ease: 'back.out',
    stagger: 0.125,
  })

sect5Tl.pause()

new ScrollMagic.Scene({
  triggerElement: '#section5',
  duration: '70%',
  triggerHook: 0.5,
})
  .on('enter', function (e) {
    sect5Tl.play()
  })
  .on('leave', function (e) {
    sect5Tl.reverse()
  })
  .addIndicators()
  .addTo(controller)
