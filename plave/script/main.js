$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main .contentwrap .content .text').css({'opacity':'1'})
    });

    $('.menu').click(function(){
        $('#nav').fadeIn(150)
        $('html,body').css({'overflow':'hidden'})
        $('#footer').css({'position':'fixed'})
        $('#footer .footer p').css({'color':'#333333'})
    });
    $('.close').click(function(){
        $('#nav').fadeOut(100)
        $('html,body').css({'overflow':'auto'})
        $('#footer').css({'position':'absolute'})
        $('#footer .footer p').css({'color':'#ffffff'})
    });

    a=$(window).width()
    if(a<500){
        $('#main .contentwrap .content .text').css({'opacity':'1'})
    }

});
