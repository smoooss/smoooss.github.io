$(document).ready(function(){

    $('#main .contentwrap .calendar.c1 .cont.c1 .date ul li').click(date1);
    
    let index = 0
 
    function date1(){
        index = $(this).index()+1;
        $('#main .contentwrap .calendar.c1 .cont.c2 .schedule ul').css({'display':'none'})
        $('#main .contentwrap .calendar.c1 .cont.c2 .schedule ul').eq(index-1).css({'display':'block'})
    }

    $('#main .contentwrap .calendar.c2 .cont.c1 .date ul li').click(date2);
    
    let idx = 0
 
    function date2(){
        idx = $(this).index()+1;
        $('#main .contentwrap .calendar.c2 .cont.c2 .schedule ul').css({'display':'none'})
        $('#main .contentwrap .calendar.c2 .cont.c2 .schedule ul').eq(idx-1).css({'display':'block'})
    }

    $('#main .contentwrap .arrow ul li').eq(1).click(function(){
        $('#main .contentwrap .calendar').css({'display':'none'})
        $('#main .contentwrap .calendar.c2').css({'display':'flex'})
    })

    $('#main .contentwrap .arrow ul li').eq(0).click(function(){
        $('#main .contentwrap .calendar').css({'display':'none'})
        $('#main .contentwrap .calendar.c1').css({'display':'flex'})
    })

    a=$(window).width()
    
    if(a<500){

        $('.header .menu').click(function(){
            $('#main .link').css({'bottom':'60px'})
        });
        $('.close').click(function(){
            $('#main .link').css({'bottom':'20px'})
        });

        $('#main .contentwrap .arrow ul li').eq(1).click(function(){
            $('#main .contentwrap .calendar.c2 .cont.c2 .schedule ul').css({'display':'none'})
            $('#main .contentwrap .calendar.c2 .cont.c2 .schedule ul').eq(7).css({'display':'block'})
        });
        $('#main .contentwrap .arrow ul li').eq(0).click(function(){
            $('#main .contentwrap .calendar.c1 .cont.c2 .schedule ul').css({'display':'none'})
            $('#main .contentwrap .calendar.c1 .cont.c2 .schedule ul').eq(3).css({'display':'block'})
        });

    }else{
        $('#main .contentwrap .arrow ul li').click(function(){
            $('#main .contentwrap .calendar .cont.c2 .schedule ul').css({'display':'block'})
        });
    }
/*
    $('#main .contentwrap .cont.c1 .date .btn li').eq(0).click(function(){
        $(this).css({'display':'none'}).siblings().css({'display':'block'})
        $('#main .contentwrap .cont.c1 .date .month').css({'backgroundColor':'#dddddd'})
        $('#main .contentwrap .cont.c1 .date .month li').css({'display':'block'})
        $('#main .contentwrap .cont.c1 .date .month li:nth-child(n+2)').slideDown(100)
    });
    $('#main .contentwrap .cont.c1 .date .btn li').eq(1).click(function(){
        $(this).css({'display':'none'}).siblings().css({'display':'block'})
        $('#main .contentwrap .cont.c1 .date .month').css({'backgroundColor':'#ffffff'})
        $('#main .contentwrap .cont.c1 .date .month li:nth-child(n+2)').slideUp(100)
    });


    $('#main .contentwrap .cont.c1 .date .month li').click(month);
    
    let idx = 0
 
    function month(){
        idx = $(this).index()+1;
        $('#main .contentwrap .cont.c1 .date .btn li').eq(0).css({'display':'block'})
        $('#main .contentwrap .cont.c1 .date .btn li').eq(1).css({'display':'none'})
        $('#main .contentwrap .cont.c1 .date .month').css({'backgroundColor':'#ffffff'})
        $('#main .contentwrap .cont.c1 .date .month li').eq(idx-1).css({'display':'block'}).siblings().css({'display':'none'})
        $('#main .contentwrap .cont.c1 .calendar ul').eq(idx-1).css({'display':'flex'}).siblings().css({'display':'none'})
        $('#main .contentwrap .cont.c2 .scroll div').eq(idx-1).css({'display':'block'}).siblings().css({'display':'none'})
    }
*/
});
