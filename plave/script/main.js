$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('main .container .content .text').css({'opacity':'1'})
    });

    a=$(window).width()
    if(a<500){
        $('main .container .content .text').css({'opacity':'1'})
    }

    $('.menu').click(function(){
        $('html,body').css({'overflow':'hidden'})
        $('nav').fadeIn(150)
        $('main .link').css({'position':'fixed'})
        $('main .link .bl').css({'display':'block'})
        $('main .link .wh').css({'display':'none'})
        $('footer').css({'position':'fixed'})
        $('footer .footer p').css({'color':'#333333'})

        if(a>=500 && a<1400){
            $('main .link').css({'bottom':'50px'})
        }
        if(a<500){
            $('main .link').css({'display':'flex'})
        }
    });
    $('.close').click(function(){
        $('html,body').css({'overflow':'auto'})
        $('nav').fadeOut(100)
        $('main .link .bl').css({'display':'none'})
        $('main .link .wh').css({'display':'block'})
        $('footer').css({'position':'absolute'})
        $('footer .footer p').css({'color':'#ffffff'})

        if(a>=500 && a<1400){
            $('main .link').css({'position':'relative','bottom':'70px'})
        }
        if(a<500){
            $('main .link').css({'display':'none'})
        }
    });

});
