const t1 = new TimelineMax({ paused: true })

t1.staggerFrom(".navigation__item", .3, {
  x: -200,
  opacity: 0,
  ease: Expo.easeInOut,
}, 0.1)

t1.to(".menu__list", 0.01, {
  y: 3,
  opacity: 0,
  ease: Expo.ease
})

t1.to(".toggle-btn__span--one", 0.8, {
  y: 3,
  rotation: 45,
  ease: Expo.easeInOut
})

t1.to(".toggle-btn__span--two", 0.8, {
  y: -5,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
})

t1.to(".toggle-btn__span--three", 0.8, {
  y: -1,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8,
  opacity: 0
})

t1.to(".navigation", .3, {
  top: "0%",
  ease: Expo.ease,
  delay: -1
})



t1.staggerFrom(".footer__list", .3, {
  x: -200,
  opacity: 0,
  ease: Expo.easeInOut,
}, 0.1)



t1.reverse()
$(document).on("click", ".toggle-btn", function () {
  t1.reversed(!t1.reversed())
})