$(document).ready(function(){

    $('main .container .menu ul li').click(menu);
    
    let index = 0
 
    function menu(){
        index = $(this).index()+1;
        $(this).css({'fontSize':'13px','fontWeight':'700'}).siblings().css({'fontSize':'12px','fontWeight':'500'})
        $('main .container .content .front ul li').eq(index-1).css({'display':'block'}).siblings().css({'display':'none'})
        $('main .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
    
        a=$(window).width();
        
        if(a>=500 && a<950){
            $('main .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
        }

    }

    $('.close').click(function(){

        a=$(window).width();

        if(a>=700 && a<1400){
            $('main .link').css({'position':'absolute','bottom':'-15px'})
        }
        if(a>=500 && a<700){
            $('main .link').css({'position':'absolute','bottom':'20px'})
        }
    });


    $(window).resize(function(){

        a=$(window).width();
        b=$('nav').hasClass('on')

        if(b==false){
            if(a>=950 && a<1400){
                $('main .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
                $('main .link').css({'position':'absolute','bottom':'-15px'})
            }
            if(a>=700 && a<950){
                $('main .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
                $('main .link').css({'position':'absolute','bottom':'-15px'})
            }
            if(a>=500 && a<700){
                $('main .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
                $('main .link').css({'position':'absolute','bottom':'20px'})
            }
        }
    });

    
});
