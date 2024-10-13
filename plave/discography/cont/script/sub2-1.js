$(document).ready(function(){


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