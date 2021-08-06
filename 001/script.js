// gsap.to('.intro__image', {
//   scale: 2,
//   transformOrigin: 'center center',
//   ease: 'expo',
//   scrollTrigger: {
//     trigger: '.intro__image',
//     start: 'center center',
//     end: 'center top',
//     pin: true,
//     scrub: 0.5,
//   },
// });

gsap.to('.hero__image', {
  scale: 8,
  transformOrigin: 'center center',
  ease: 'expo',
  scrollTrigger: {
    trigger: '.hero__image',
    start: 'center center',
    end: 'center top',
    pin: true,
    scrub: 0.5,
  },
});

gsap.fromTo(
  '.hero__image',
  {
    opacity: 0,
    objectPosition: 'center 0%',
    y: 100,
  },
  {
    opacity: 1,
    duration: 2,
    objectPosition: 'center 15%',
    y: 0, 
    ease: 'expo.inOut',
  }
);
