
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 8000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  
  $('.count-infinite').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 1000000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
 
  $(document).ready(function(){
$(".collapse_btn").click(function(){

  $("#collapse_details").toggleClass('collapse_details p');

});


$(".collapse_btn1").click(function(){

  $("#collapse_details1").toggleClass('collapse_details1');
  

 
});
$(".collapse_btn2").click(function(){

  $("#collapse_details2").toggleClass('collapse_details2');
  

 
});
$(".collapse_btn3").click(function(){

  $("#collapse_details3").toggleClass('collapse_details3');
  
});

  }) ;

 
  //bottom to top
  
  // fadeIn fadeOut
  $(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
  
  //bottom to top

  $('.scrollup').click(function (){
    $("html,body").animate({
    scrollTop: 0
    }, 1000);
    return false;
    });
  
  
$(document).ready(function(){
  
 
    $(window).on('scroll',function(){

var scroll= $(window).scrollTop();

if(scroll>80){
  $(".nav").addClass('scroll-header');
  
}else{
  $(".nav").removeClass('scroll-header');
}

  });
  
});
  
  
  
 