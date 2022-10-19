$(document).ready(function(){

$(".video-play-btn").magnificpopup({
  type:'video',
})
  
  });

  $('.single-active').owlCarousel({
    loop:true,    
    dotsEach:true,     
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:3
       }
   }
 })

























      