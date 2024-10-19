$(document).ready(function(){

    $('main .container .menu ul li').click(menu);
    
    let index = 0
 
    function menu(){
        index = $(this).index()+1;
        $(this).css({'fontSize':'13px','fontWeight':'700'}).siblings().css({'fontSize':'12px','fontWeight':'500'})
        $('main .container .content .front ul li').eq(index-1).css({'display':'block'}).siblings().css({'display':'none'})
        $('main .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
    }

    a=$(window).width()
    if(a<500){

        $('.header .menu').click(function(){
            $('main .link').css({'bottom':'60px'})
        });
        $('.close').click(function(){
            $('main .link').css({'bottom':'20px'})
        });
    }

});