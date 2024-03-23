$(document).ready(function(){

    $('#main .contentwrap .cont.c1 .calendar ul li').click(date);
    
    let index = 0
 
    function date(){
        index = $(this).index()+1;
        $('#main .contentwrap .cont.c2 .schedule ul').css({'display':'none'})
        $('#main .contentwrap .cont.c2 .schedule ul').eq(index-5).css({'display':'block'})
    }

    a=$(window).width()
    
    if(a<500){

        $('.header .menu').click(function(){
            $('#main .link').css({'bottom':'60px'})
        });
        $('.close').click(function(){
            $('#main .link').css({'bottom':'20px'})
        });
    }

});