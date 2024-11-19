$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('main .container .content .text').css({'opacity':'1'})
        $('main .container').css({'opacity':'1'})
    });

    
    a=$(window).width()
    c=$(window).height()

    if(a>=500){
        $('main .container ul li').mouseover(function(){
            $(this).find('a').css({'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })
    }
    if(a<500){
        $('main .container .content .text').css({'opacity':'1'})
        $('main .container').css({'opacity':'1'})

        if(c>=750){
            $('#schedule main').css({'height':'calc(100vh - 70px)'})
        }
    }


    $('.header .menu').click(function(){

        $('html,body').animate({scrollTop:0},0).css({'overflow':'hidden'})
        $('nav').fadeIn(150).addClass('on')
        $('main .link').css({'bottom':'35px'})
        $('main .link .bl').css({'display':'block'})
        $('main .link .wh').css({'display':'none'})
        $('footer').css({'position':'fixed'})
        $('footer .footer p').css({'color':'#333333'})

        a=$(window).width();

        if(a>=700 && a<1401){
            $('main .link').css({'position':'fixed','bottom':'50px'})
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
        $('main .link .bl').css({'display':'none'})
        $('main .link .wh').css({'display':'block'})
        $('footer').css({'position':'relative'})
        $('#foyer footer').css({'position':'fixed'})
        $('#foyer .footer p').css({'color':'#ffffff'})

        a=$(window).width();

        if(a>=700 && a<1401){
            $('main .link').css({'position':'relative','bottom':'-20px'})
            $('#foyer .link').css({'position':'fixed','bottom':'50px'})
            $('#profile .link').css({'position':'absolute','bottom':'-20px'})
            $('#schedule .link').css({'position':'absolute'})
        }
        if(a>=500 && a<700){
            $('main .link').css({'position':'relative','bottom':'20px'})
            $('#foyer .link').css({'bottom':'110px'})
            $('#profile .link').css({'position':'absolute'})
            $('#foyer footer').css({'position':'relative'})
        }
        if(a<500){
            $('main .link').css({'position':'relative','bottom':'20px'})
            $('#foyer .link').css({'bottom':'75px'})
            $('#profile .link').css({'position':'absolute'})
            $('#foyer footer').css({'position':'relative'})
        }
    });


    $('#profile .container .menu ul li').click(profilemenu);
    
    let index = 0
 
    function profilemenu(){
        index = $(this).index()+1;
        $(this).css({'fontSize':'1rem','fontWeight':'700'}).siblings().css({'fontSize':'0.9rem','fontWeight':'500'})
        $('#profile .container .content .front ul li').eq(index-1).css({'display':'block'}).siblings().css({'display':'none'})
        $('#profile .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
    
        a=$(window).width();
        
        if(a>=500 && a<950){
            $('#profile .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
        }
    }


    $('#video .container .menu ul li').click(videomenu);

    let idx = 0

    function videomenu(){
        idx = $(this).index()+1;
        $('html,body').animate({scrollTop:0},0)
        $('#video .container .menu ul li').eq(idx-1).css({'fontWeight':'700','color':'#333333'}).siblings().css({'fontWeight':'500','color':'#bbbbbb'})
        $('#video .container .content .cont').eq(idx-1).fadeIn(300).siblings().fadeOut(100)
    }


    $(window).resize(function(){

        a=$(window).width();
        b=$('nav').hasClass('on');
        c=$(window).height();


        if(a>=1401){
            if(c>=700){
                $('main .link').css({'position':'fixed','bottom':'35px','width':'20px','display':'block'})
            }
            if(c<700){
                $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
                $('main .link a').css({'width':'20px'})
            }
        }
        if(a>=950 && a<1401){
            if(c>=700){
                if(b==true){
                $('main .link').css({'position':'fixed','bottom':'50px','width':'250px','display':'flex'})
                }
                if(b==false){
                    $('main .link').css({'position':'relative','bottom':'-20px','width':'250px','display':'flex'})
                    $('#foyer .link').css({'position':'fixed','bottom':'50px'})
                    $('#profile .link').css({'position':'absolute'})
                    $('#profile .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
                    $('#schedule .link').css({'position':'absolute'})
                }
            }
            if(c<700){
                $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
                $('main .link a').css({'width':'20px'})
            }
        }
        if(a>=700 && a<950){
            if(c>=700){
                if(b==true){
                $('main .link').css({'position':'fixed','bottom':'50px','width':'250px','display':'flex'})
                }
                if(b==false){
                    $('main .link').css({'position':'relative','bottom':'-20px','width':'250px','display':'flex'})
                    $('#foyer .link').css({'position':'fixed','bottom':'50px'})
                    $('#profile .link').css({'position':'absolute'})
                    $('#profile .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
                    $('#schedule .link').css({'position':'absolute'})
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
                    $('#foyer .link').css({'bottom':'110px'})
                    $('#profile .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
                    $('#profile .link').css({'position':'absolute'})
                }
            }
            if(c<700){
                if(b==true){
                    $('main .link').css({'position':'absolute','bottom':'unset','width':'250px','display':'flex','flex-wrap':'wrap','justify-content':'space-between'})
                    $('main .link a').css({'width':'20px'})    
                }
            }
        }
        if(a<500){
            if(c>=750){
                $('#schedule main').css({'height':'calc(100vh - 70px)'})
            }
            if(c<750){
                $('#schedule main').css({'height':'unset'})
            }
        }
    });

});