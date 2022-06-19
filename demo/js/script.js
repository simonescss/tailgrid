 // navbar
 var hb = document.querySelector('.hb');
 var span = document.querySelectorAll('.hb span');
 const c_1 = 1;
 const c_2 = 2;
 var span_1 = document.querySelector(`.hb span:nth-child(${c_1})`);
 var span_2 = document.querySelector(`.hb span:nth-child(${c_2})`);
 
 var nav = document.querySelector('#nav');
 var header = document.querySelector('header');
 var logo = document.querySelector('.logo');
 var menuItem = document.querySelectorAll('nav a');

     // Menu ANIMATION
     var tl = gsap.timeline({ paused: true });
     
     tl.to(header, {
         duration: 0.2,
         backgroundColor: '#333',
         ease: 'expo2.inOut',
         borderColor: '#555'
     })
     tl.to(logo, {
         duration: 0.2,
         filter: 'invert(1)',
         ease: 'expo2.inOut',
     })
     tl.to(span, {
         duration: 0.2,
         backgroundColor: '#fff',
         ease: 'expo2.inOut',
     })
     tl.to(span_2, {
         duration: 0.1,
         marginRight: '30px',
         ease: 'expo2.inOut',
     })
     tl.to(nav, {
         duration: 1,
         opacity: 1,
         overflow: 'visible',
         height: 'calc(100vh + 65px)', // change this to 100vh for full-height menu
         ease: 'expo.inOut',
     })
     tl.from(menuItem, {
         duration: 1,
         opacity: 0,
         y: 20,
         stagger: 0.1,
         ease: 'expo.inOut',
     }, "-=0.5");
     
     tl.reverse();
     
     hb.addEventListener('click', (e) => {
     e.preventDefault();
         tl.reversed(!tl.reversed());
     });