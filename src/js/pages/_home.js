/**
 * Home
 */
export default function() {






  /*
  function animateFrom(elem, direction) {
    direction = 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains("us_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("us_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
      scrollTrigger: {
        trigger: elem,
        //toggleActions: "restart pause reverse pause",
        start: "top 102%",
        end: "bottom 60%",
        scrub: 1,
        //markers: true
      },
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".us_reveal").forEach(function(elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) },
      onLeaveBack: function() { hide(elem) }
    });

  });
*/
  /*

    gsap.utils.toArray("header .grid .item.logo a").forEach(function(elem) {
      hide(elem);

      scrollTrigger.create({
        trigger: elem,
        scroller: "body",
        start: () => "top -" + (window.innerHeight * (i + 0.5)),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      });

    });
  */

  gsap.registerPlugin(ScrollTrigger);
  /*
  gsap.utils.toArray('header .grid .item.logo a').forEach((elem, i) => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: 'main',
        //endTrigger: '#about',
        start: () => window.innerHeight / 2 + " center",
        //start: 'top center',
        end: 'bottom center',
        //toggleActions: "play none reverse none",
        //pin: 'main',
        //ease: "expo.in",
        //duration: 2.5,
        //markers: true,
        scrub: true
      }
    });


    tl2.fromTo(elem, { top: "0%" }, { top: "calc(100vh - 200px)", duration: 1, ease: "power1.in" });
    /*ScrollTrigger.create({
      /*trigger: elem,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,/
    markers: true,

      start: () => "top -" + (window.innerHeight * (i + 0.5)),
      end: () => "+=" + window.innerHeight,
      //trigger: 'main',
      //scroller: "body",
      //onEnter: function() { logo(elem) },
      /*onEnterBack: function() { logo(elem) },
      onLeave: function() { hide(elem) },
      onLeaveBack: function() { hide(elem) }/
      scrub: 1
    });* /




  /*
    gsap.to(elem, {
      scrollTrigger: {
        trigger: '.featured.ptop',
        endTrigger: '.featured.bottom',
        start: 'top center',
        end: 'bottom center',
        //toggleActions: "play none reverse none",
        //pin: 'main',
        ease: "expo",
        markers: true,
        scrub: 1
      },
      //duration: 1.25,
      x: 0,
      y: '80%',
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });* /
  });
  */

  ScrollTrigger.matchMedia({
    // desk
    "(min-width: 769px)": function() {

      gsap.utils.toArray('.block_02').forEach((elem, i) => {
        var tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: '.block_02',
              start: 'top top',
              end: 'bottom center',
              pin: true,
              //markers: true,
              scrub: true
            }
          })
          .fromTo(elem.querySelector('.bg'), { top: 0, scale: 1 }, { top: '1800%', scale: 60, duration: 1, ease: "power1.in" })
          .to(elem.querySelector('.block-text'), {
            opacity: 1,
            x: '-50%',
            duration: 0.5
          })

      });

      gsap.utils.toArray('.block_04').forEach((elem, i) => {
        var tl4 = gsap.timeline({
            scrollTrigger: {
              trigger: '.block_04',
              start: 'top top',
              end: 'bottom center',
              pin: true,
              //markers: true,
              scrub: true
            }
          })
          .fromTo(elem.querySelector('.bg'), { top: 0, scale: 1 }, { top: '1800%', scale: 60, duration: 5, ease: "power1.in" })
          //.fromTo(elem.querySelector('.block-image'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power1.in" }, ">")
          .to(elem.querySelector('.block-text'), {
            opacity: 1,
            x: '-50%',
            duration: 3,
            delay: 5
          }, "<")
          .fromTo(elem.querySelector('.block-image .before'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 5, ease: Back.easeInOut.config(1.3) }, ">")
          .fromTo(elem.querySelector('.block-image .after'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 8, ease: Back.easeInOut.config(1.3) }, "<")
          .fromTo(elem.querySelector('.block-image .block-image-block-01'), { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 8, ease: Back.easeInOut.config(1.3) }, "<")
          .fromTo(elem.querySelector('.block-image .block-image-block-02'), { opacity: 0, left: '207px' }, { opacity: 1, left: '237px', duration: 8, ease: Back.easeInOut.config(1.3) }, "<")
          .fromTo(elem.querySelector('.block-image .block-image-block-04'), { opacity: 0, left: '168px' }, { opacity: 1, left: '198px', duration: 8, ease: Back.easeInOut.config(1.3), delay: 5 }, "<")
          .fromTo(elem.querySelector('.block-image .block-image-block-03'), { opacity: 0, left: '306px' }, { opacity: 1, left: '336px', duration: 8, ease: Back.easeInOut.config(1.3), delay: 5 }, "<")


      });
    },

  });


}