$(document).ready(function(){

    $('main .container .cont.c2 ul li .title ul li').click(function(){

        c=$('main .container .cont.c2 ul li .script ul li').height()
        $('main .container .cont.c2 > ul').css({'height':(c+80)+'px'})
    });

    a=$('main .container .cont.c4 ul li > img').height()
            
    $('main .container .cont.c4 ul li').find('a').css({'height':a})
        

    $('main .container .cont.c4 ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    })

    $(window).on('resize',function(){

        b=$('main .container .cont.c4 ul li > img').height()

        $('main .container .cont.c4 ul li').find('a').css({'height':b})
        
    });

});