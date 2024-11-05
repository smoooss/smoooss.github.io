$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('main .container').css({'opacity':'1'})
    });


    a=$(window).width()

    if(a<500){
        $('main .container').css({'opacity':'1'})
    }

    c=$(window).height()

    if(a>=1400){
        if(c>=700){
            $('main .link').css({'position':'fixed','bottom':'35px','width':'20px','display':'block'})
        }
        if(c<700){
            $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
            $('main .link a').css({'width':'20px'})
        }
    }


    $('.header .menu').click(function(){

        $('html,body').animate({scrollTop:0},0).css({'overflow':'hidden'})
        $('nav').fadeIn(150).addClass('on')
        $('main .link').css({'position':'fixed','bottom':'35px'})
        $('footer').css({'position':'fixed'})

        a=$(window).width();
        c=$(window).height();

        if(a>=700 && a<1400){
            $('main .link').css({'position':'fixed','bottom':'55px'})
        }
        if(a>=500 && a<700){
            $('main .link').css({'position':'fixed','bottom':'90px'})
        }
        if(a<500){
            $('main .link').css({'position':'fixed','bottom':'60px'})
        }
    });

    $('.close').click(function(){

        $('html,body').css({'overflow':'auto'})
        $('nav').fadeOut(100).removeClass('on')
        $('main .link').css({'position':'fixed','bottom':'35px'})
        $('footer').css({'position':'relative'})

        a=$(window).width();

        if(a>=700 && a<1400){
            $('main .link').css({'position':'relative','bottom':'-15px'})
        }
        if(a>=500 && a<700){
            $('main .link').css({'position':'relative','bottom':'20px'})
        }
        if(a<500){
            $('main .link').css({'position':'relative','bottom':'20px'})
        }
    });


    $(window).resize(function(){

        a=$(window).width();
        b=$('nav').hasClass('on')
        c=$(window).height();


        if(a>=1400){
            if(c>=700){
                $('main .link').css({'position':'fixed','bottom':'35px','width':'20px','display':'block'})
            }
            if(c<700){
                $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
                $('main .link a').css({'width':'20px'})
            }
        }
        if(a>=700 && a<1400){
            if(c>=700){
                if(b==true){
                $('main .link').css({'position':'fixed','bottom':'55px','width':'250px','display':'flex'})
                }
                if(b==false){
                    $('main .link').css({'position':'relative','bottom':'-15px','width':'250px','display':'flex'})
                }
            }
            if(c<700){
                $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
                $('main .link a').css({'width':'20px'})
            }
        }
        if(a>=500 && a<700){
            if(c>=700){
                if(b==true){
                    $('main .link').css({'position':'fixed','bottom':'90px'})
                }
                if(b==false){
                    $('main .link').css({'position':'relative','bottom':'20px'})
                }
            }
            if(c<700){
                if(b==true){
                    $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
                    $('main .link a').css({'width':'20px'})    
                }
            }
        }
    });

});
