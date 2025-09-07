const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.075,
  multiplier: 1
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    scale:1,
    duration:0
})
tl.to("#page1",{
    y:"0vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    duration:1,
    repeat:1,
    yoyo:true,
})

tl.to('#page1 h1',{
    duration:0.7,
    stagger:1,
    opacity:0,
    repeat:-1,
    yoyo:true,
})

tl.from("#page1 p, h6",{
    y:80,
    duration:0.5,
    delay:0.2,
    stagger:0.15,
    opacity:0
})

gsap.from("#page3 img",{
    scale:4,
    opacity:0,
    duration:3,
    rotate:360,
    repeat:-1,
    yoyo: true,
})

gsap.from("#elem2 h2",{
    y:20,
    duration:0.7,
    scale: 1.2,
    repeat:-1,
    yoyo: true,
    delay:2
})
