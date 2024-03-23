$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main .contentwrap').css({'opacity':'1'})
    });
    
    $('.header .menu').click(function(){
        $('#nav').fadeIn(150)
        $('html,body').animate({scrollTop:0},0).css({'overflow':'hidden'})
        $('#footer').css({'position':'fixed'})
    });
    $('.close').click(function(){
        $('#nav').fadeOut(100)
        $('html,body').css({'overflow':'auto'})
        $('#footer').css({'position':'relative'})
    });

    a=$(window).width()
    if(a<500){
        $('#main .contentwrap').css({'opacity':'1'})

        $('.header .menu').click(function(){
            $('#main .link').css({'position':'fixed'})
        });
        $('.close').click(function(){
            $('#main .link').css({'position':'absolute'})
        });
    }

});