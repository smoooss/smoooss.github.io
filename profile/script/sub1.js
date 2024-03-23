$(document).ready(function(){

    $('#main .contentwrap .menu ul li').click(menu);
    
    let index = 0
 
    function menu(){
        index = $(this).index()+1;
        $(this).css({'fontWeight':'700'}).siblings().css({'fontWeight':'500'})
        $('#main .contentwrap .content .front ul li').eq(index-1).css({'display':'block'}).siblings().css({'display':'none'})
        $('#main .contentwrap .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
    }

    a=$(window).width()
    if(a<500){

        $('.header .menu').click(function(){
            $('#main .link').css({'bottom':'0'})
        });
        $('.close').click(function(){
            $('#main .link').css({'bottom':'-40px'})
        });
    }

});