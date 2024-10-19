$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('main .container').css({'opacity':'1'})
    });
    
    $('.header .menu').click(function(){
        $('nav').fadeIn(150)
        $('html,body').animate({scrollTop:0},0).css({'overflow':'hidden'})
        $('footer').css({'position':'fixed'})
    });
    $('.close').click(function(){
        $('nav').fadeOut(100)
        $('html,body').css({'overflow':'auto'})
        $('footer').css({'position':'relative'})
    });

    a=$(window).width()

    if(a>=500 && a<1400){
        $('.header .menu').click(function(){
            $('main .link').css({'position':'fixed','bottom':'50px'})
        });
        $('.close').click(function(){
            $('main .link').css({'position':'relative','bottom':'-20px'})
        });
    }
    if(a<500){
        $('main .container').css({'opacity':'1'})

        $('.header .menu').click(function(){
            $('main .link').css({'position':'fixed'})
        });
        $('.close').click(function(){
            $('main .link').css({'position':'absolute'})
        });
    }

});