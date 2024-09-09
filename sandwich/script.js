


window.onload = function() { 



    let myObj = document.getElementById('obj').contentDocument;

    // triggers
    let myTrigger = myObj.getElementById('top-bun');
    let myTrigSpinach = myObj.getElementById('spinach');
    let myTrigTomato = myObj.getElementById('tomato');
    let myTrigCheese = myObj.getElementById('cheese');
    let myTrigHam = myObj.getElementById('ham');
    let myTrigMayo = myObj.getElementById('mayo');
    let myUS= document.getElementsByClassName('us');
    let myUK= document.getElementsByClassName('uk');
    let infographic = document.getElementsByClassName('infographic');
    let myNorth= document.getElementsByClassName('northAmerica');
    let myGraph= document.getElementsByClassName('graph');
    let myMarket= document.getElementsByClassName('market');
    let myPizza= document.getElementsByClassName('pizza');
    let myMiniSandwich= document.getElementsByClassName('mini-sandwich');

    let mySourdough = document.getElementsByClassName('sourdough');
    let mySourdoughReveal = document.getElementsByClassName('sourdough-reveal');
    let mySpinach = document.getElementsByClassName('baby-spinach');
    let mySpinachReveal = document.getElementsByClassName('spinach-reveal');
    let myTomato = document.getElementsByClassName('tomato');
    let myTomatoReveal = document.getElementsByClassName('tomato-reveal');
    let myCheese = document.getElementsByClassName('cheese');
    let myCheeseReveal = document.getElementsByClassName('cheese-reveal');
    let myHam = document.getElementsByClassName('ham');
    let myHamReveal = document.getElementsByClassName('ham-reveal');
    let myMayo = document.getElementsByClassName('mayo');
    let myMayoReveal = document.getElementsByClassName('mayo-reveal');

    gsap.registerPlugin('ScrollTrigger');

    gsap.from(myUS, {
        x: -900,
        ease: 'sine.in',
        duration: 1,
        stagger: .4,
        scrollTrigger: {
            trigger: infographic,
            start: "top 100%",
            end: "bottom 25%",
            // events onEnter onLeave onEnterBack onLeaveBack
            // play restart pause resume reset reverse complete none
            toggleActions: "restart pause resume reverse"
        }
    });

    gsap.from(myNorth, {
        x: 1390,
        ease: 'sine.in',
        duration: 1,
        stagger: .4,
        scrollTrigger: {
            trigger: infographic,
            start: "top",
            end: "bottom 100%",
            // events onEnter onLeave onEnterBack onLeaveBack
            // play restart pause resume reset reverse complete none
            toggleActions: "restart pause resume reverse"
        }
    });

    gsap.from(myUK, {
        x: -1450,
        ease: 'sine.in',
        duration: 1,
        stagger: .4,
        scrollTrigger: {
            trigger: infographic,
            start: "15%",
            end: "bottom 100%",
            // events onEnter onLeave onEnterBack onLeaveBack
            // play restart pause resume reset reverse complete none
            toggleActions: "restart pause resume reverse"
        }
    });

    gsap.from(myGraph, {
        x: 1300,
        ease: 'sine.in',
        duration: 1,
        stagger: .4,
        scrollTrigger: {
            trigger: infographic,
            start: "center top",
            end: "bottom 70%",
            // events onEnter onLeave onEnterBack onLeaveBack
            // play restart pause resume reset reverse complete none
            toggleActions: "restart pause resume reverse"
        }
    });

    gsap.from(myMarket, {
        x: -1600,
        ease: 'sine.in',
        duration: 1,
        stagger: .4,
        scrollTrigger: {
            trigger: infographic,
            start: "center top",
            end: "bottom 70%",
            // events onEnter onLeave onEnterBack onLeaveBack
            // play restart pause resume reset reverse complete none
            toggleActions: "restart pause resume reverse"
        }
    });

    // sourdough
    gsap.set(mySourdoughReveal, {opacity: 0});
  
    myTrigger.addEventListener('mouseenter', function(){
        gsap.to(mySourdough, {opacity:0});
        gsap.to(mySourdoughReveal, {opacity:1});
        gsap.to(myTrigger, {scale: 1.2, transformOrigin: "center"});
    });

    myTrigger.addEventListener('mouseleave', function(){
        gsap.to(mySourdough, {opacity:1});
        gsap.to(mySourdoughReveal, {opacity:0});
        gsap.to(myTrigger, {scale: 1, transformOrigin: "center"});
    });

    // spinach 
    gsap.set(mySpinachReveal, {opacity: 0});
  
    myTrigSpinach.addEventListener('mouseenter', function(){
        gsap.to(mySpinach, {opacity:0});
        gsap.to(mySpinachReveal, {opacity:1});
        gsap.to(myTrigSpinach, {scale: 1.2, transformOrigin: "center"});
    });

    myTrigSpinach.addEventListener('mouseleave', function(){
        gsap.to(mySpinach, {opacity:1});
        gsap.to(mySpinachReveal, {opacity:0});
        gsap.to(myTrigSpinach, {scale: 1, transformOrigin: "center"});
    });

      // tomato 
      gsap.set(myTomatoReveal, {opacity: 0});
  
      myTrigTomato.addEventListener('mouseenter', function(){
          gsap.to(myTomato, {opacity:0});
          gsap.to(myTomatoReveal, {opacity:1});
          gsap.to(myTrigTomato, {scale: 1.2, transformOrigin: "center"});
      });
  
      myTrigTomato.addEventListener('mouseleave', function(){
          gsap.to(myTomato, {opacity:1});
          gsap.to(myTomatoReveal, {opacity:0});
          gsap.to(myTrigTomato, {scale: 1, transformOrigin: "center"});

      });

        // cheese
          gsap.set(myCheeseReveal, {opacity: 0});
  
          myTrigCheese.addEventListener('mouseenter', function(){
              gsap.to(myCheese, {opacity:0});
              gsap.to(myCheeseReveal, {opacity:1});
              gsap.to(myTrigCheese, {scale: 1.2, transformOrigin: "center"});
          });
      
          myTrigCheese.addEventListener('mouseleave', function(){
              gsap.to(myCheese, {opacity:1});
              gsap.to(myCheeseReveal, {opacity:0});
              gsap.to(myTrigCheese, {scale: 1, transformOrigin: "center"});
          });

     // Ham
     gsap.set(myHamReveal, {opacity: 0});
  
     myTrigHam.addEventListener('mouseenter', function(){
         gsap.to(myHam, {opacity:0});
         gsap.to(myHamReveal, {opacity:1});
         gsap.to(myTrigHam, {scale: 1.2, transformOrigin: "center"});
     });
 
     myTrigHam.addEventListener('mouseleave', function(){
         gsap.to(myHam, {opacity:1});
         gsap.to(myHamReveal, {opacity:0});
         gsap.to(myTrigHam, {scale: 1, transformOrigin: "center"});
     });

      // Mayo
      gsap.set(myMayoReveal, {opacity: 0});
  
      myTrigMayo.addEventListener('mouseenter', function(){
          gsap.to(myMayo, {opacity:0});
          gsap.to(myMayoReveal, {opacity:1});
          gsap.to(myTrigMayo, {scale: 1.2, transformOrigin: "center"});
      });
  
      myTrigMayo.addEventListener('mouseleave', function(){
          gsap.to(myMayo, {opacity:1});
          gsap.to(myMayoReveal, {opacity:0});
          gsap.to(myTrigMayo, {scale: 1, transformOrigin: "center"});

      });

    
      gsap.to(myPizza, {
          scale: 1.1,
          yoyo:true,
          repeat: -1,
          ease: "sine.inOut",
          rotation : 2,
          duration: 2
        });

        gsap.to(myMiniSandwich, {
            scale: 1.1,
            yoyo:true,
            repeat: -1,
            ease: "sine.inOut",
            rotation : 2,
            duration: 2
          });
     
  
   


   
   








    
}

