console.log('%c Do not do anything here. It may mess with your experience on this site!', 'background: yellow; color: red; padding: 10px; font-size: 2em;');

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let controllerTwo = new ScrollMagic.Controller();
let timelineTwo = new TimelineMax();

// timeline
    // .to('.text', 2, {x: 500})
    // .to('.content-images', 2, {opacity: 0}, '-=2')
    // .fromTo('.text', {opacity: 0}, {opacity: 1, duration: 3});


// HEADER ANIMATIONS
timeline
    .to('.home-ship', 3, {y: -200}, '-=3')
    .to('.home-astroid', 3, {y: -50})
    .to('.home-planet', 3, {y: -5}, '-=3')
    .to('img.bg', 3, {y: 100}, '-=3')
    .to('header', 5, {height: 500}, '-=3')

    .to('#earthRotate', 3, {rotate: -40},'-=2')
    .to('#moonMove', 4, {x: 550}, '-=3')
    .to('#moonMove', 4, {y: -100}, '-=3')

    new ScrollMagic.Scene({
        triggerElement: "div.animationOne",
        duration: '100%',
        triggerHook: 0,
    })
    .setTween(timeline)
    .addTo(controller);

// ABOUT ME SECTION
// timeline
    // .to('#earthRotate', 2, {rotate: -40, delay: 3})
    // .to('#moonMove', 2, {x: 550}, '-=2')
    // .to('#moonMove', 2, {y: -100}, '-=2')
    
//     new ScrollMagic.Scene({
//         triggerElement: '#moonMove',
//         duration: '100%',
//         triggerHook: 0.2, 
//     })
//     .setTween(timeline)
//     .addTo(controller);

// // DISCOVER SECTION 
// timeline
//     .to('#vsc', 5, {right: 50})

//     new ScrollMagic.Scene({
//         triggerElement: '#discover',
//         duration: '100%',
//         triggerHook: 0, 
//     })

// // shortcuts
// // document.addEventListener('keydown', e => {
// //     if (e.key.toLowerCase() === 'w' && e.ctrlKey) {
// //         console.log('w was clicked')
// //     } 
// // })