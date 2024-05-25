$(document).ready(function(){

    $('#main .contentwrap .cont.c2 ul li .title ul li').click(function(){

        $('#main .contentwrap .cont.c2 > ul').css({'height':'265px'})
    });

    a=$('#main .contentwrap .cont.c4 ul li > img').height()
            
    $('#main .contentwrap .cont.c4 ul li').find('a').css({'height':a})
        

    $('#main .contentwrap .cont.c4 ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    })

    $(window).on('resize',function(){

        b=$('#main .contentwrap .cont.c4 ul li > img').height()

        $('#main .contentwrap .cont.c4 ul li').find('a').css({'height':b})
        
    });

});
