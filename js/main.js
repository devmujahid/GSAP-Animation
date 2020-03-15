// var tl = new TimelineLite({})
// tl.to(".logo", {duration: 2, x: 300, rotation: 360, backgroundColor: "#560563", borderRadius: "20%",
//  border: "5px solid #000", ease: "power2.out"});

gsap.set(".logo", {transformOrigin: "50% 50%"});
gsap.to(".logo", {duration: 20, rotation: 360});

var myObject = {rotation: 0};
gsap.to(myObject, {duration: 20, rotation: 360, onUpdate: function() {
    console.log(myObject.rotation);
}});

gsap.from("#circle1, #circle2, #circle3, #circle4, #circle5", {duration: 12, opacity: 0, y: 150});

// slider effect 
TweenMax.to(".sub-slide-2", 0.1, {left: '300px'});
TweenMax.to(".sub-slide-2 .type", 0.1, {y: 20, opacity: 0, x: 10, position: "absolute"});
TweenMax.from(".animationSlide", 1, {y: 80, opacity: 0},
 {y: 0, opacity: 1, ease: Power0.easeInOut }
);

const tl = new TimelineMax({ paused: true, repeat: -1 });
const subtitleTimeline = new TimelineLite();
subtitleTimeline .fromTo(".sub-slide-1", 1,
 { opacity: 0, y: 20, ease: Power0.easeInOut },
 { opacity: 1, y: 0, ease: Power0.easeInOut },
    "+=1"
)
.to("sub-slide-1", 1, { opacity: 0, y: -20, ease: Power0.easeInOut }, '+=1') 
.to(
    '.sub-slide-2',
    1,
    { opacity: 1, y: 0, ease: Power0.easeInOut },
    '+=1'
  )
  
  .fromTo('.type-1', 1.5, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '+=.5')
  .to(".type-1", 1.5, { opacity: 0, y: -20 }, '+=.6')
  .to(".type-2", 1.5, { opacity: 1, y: 0 }, '+=.5')
  .to(".type-2", 1.5, { opacity: 0, y: -20 }, '+=.6')
  .to(".type-3", 1.5, { opacity: 1, y: 0 }, '+=.5')
  .to(".type-3", 1.5, { opacity: 0, y: -20 }, '+=.6')
  .to(".last", 1.5, { opacity: 1, y: 0 }, '+=.5')
  .to(".sub-slide-2", 1, { opacity: 0, y: -20, ease: Power0.easeInOut },'+=1')

  .to(".sub-slide-1", 1, { opacity: 0, y: 20, ease: Power0.easeInOut });

    tl.add(subtitleTimeline);

    // delay start of slider for 2 seconds
    TweenMax.delayedCall(
        1,
        function(tl) {
          tl.restart(true, false);
        },
        [tl]
      );
// slider effect 
