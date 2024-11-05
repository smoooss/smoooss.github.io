$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('main .container .content .text').css({'opacity':'1'})
    });

    a=$(window).width()
    if(a<500){
        $('main .container .content .text').css({'opacity':'1'})
    }


    $('.header .menu').click(function(){

        $('html,body').animate({scrollTop:0},0).css({'overflow':'hidden'})
        $('nav').fadeIn(150).addClass('on')
        $('main .link').css({'bottom':'35px'})
        $('main .link .bl').css({'display':'block'})
        $('main .link .wh').css({'display':'none'})
        $('footer .footer p').css({'color':'#333333'})

        a=$(window).width();
        b=$('nav').hasClass('on')

        if(a<1400){
            $('main .link').css({'display':'flex','bottom':'50px'})
        }
        if(a<700){
            if(b==true){
                $('main .link').css({'position':'fixed','bottom':'80px'})
                $('footer').css({'position':'fixed'})
            }
        }
        if(a<500){
            $('main .link').css({'position':'fixed','bottom':'50px'})
        }
    });

    $('.close').click(function(){
        
        $('html,body').css({'overflow':'auto'})
        $('nav').fadeOut(100).removeClass('on')
        $('main .link .bl').css({'display':'none'})
        $('main .link .wh').css({'display':'block'})
        $('footer .footer p').css({'color':'#ffffff'})

    });


    $(window).resize(function(){

        $('main .link').css({'position':'fixed','display':'block','bottom':'35px'})

        a=$(window).width();
        b=$('nav').hasClass('on')

        if(a<1400){
            $('main .link').css({'display':'flex','bottom':'50px'})
        }
        if(a<700){
            if(b==true){
                $('main .link').css({'position':'fixed','bottom':'80px'})
            }
            if(b==false){
                $('main .link').css({'position':'relative','bottom':'100px'})
            }
        }
    });

});
