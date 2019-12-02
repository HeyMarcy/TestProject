import { gsap } from 'gsap'
import ScrollMagic from 'ScrollMagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, gsap);

const controller = new ScrollMagic.Controller()

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
  duration: '80%',
  triggerHook: 0.4,
})
  .on('enter', function (e) {
    sect5Tl.play()
  })
  .on('leave', function (e) {
    sect5Tl.reverse()
  })
  .addTo(controller)
