$('.js-tilt').tilt({
    scale: 1.05
 })

 document.addEventListener("DOMContentLoaded", () => {
     const tl = new TimelineMax()

     tl.fromTo('.bg-loading', 3, {width: "100%"}, {width: "0%", delay:4, ease: Expo.easeInOut})
     tl.fromTo('.bg-animation', 1.5, {width: "0%", opacity:0}, {width: "100%", opacity:1, ease: Expo.easeInOut})
     tl.fromTo('.logo', .6, {y: -1000, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.nav-list', .7, {y: -1000, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.menu-mobile', .7, {y: -1000, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.nav-social', .7, {y: -500, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.tl-1', .7, {y: -1000, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.tl-2', .7, {x: -1000, opacity:1}, {x: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.tl-3', .7, {x: -1000, opacity:1}, {x: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.tl-4', .7, {x: -1000, opacity:1}, {x: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.bg-hero', 1, {y: -1000, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.lines', .5, {y: -1000, opacity:1}, {y: 0, ease: Expo.easeInOut}, '-=0.5')
     tl.fromTo('.container-gallery', .5, {x: 2000, opacity:1}, {x: 0, ease: Expo.easeInOut}, '-=0.5')
 })