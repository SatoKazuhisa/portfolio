$(window).on('load',function(){
    $("#splash").delay(1800).fadeOut('slow');
    $("#splash_logo").delay(1600).fadeOut('slow');
});

$(window).on('load',function(){
    $("#splash2").delay(100).fadeOut('slow');
});

function fadeAnime(){
    $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
});
}

$(window).scroll(function (){
    fadeAnime();
  });