$(document).ready(function(){

    
    a=$(window).width()

    if(a>=500){

        $('main .container .cont.c2 ul li .title ul li').click(script);
        
        function script(){
            c=$('main .container .cont.c2 ul li .script ul li').height()

            $('main .container .cont.c2 ul li .script ul li').fadeIn(300)
            $('main .container .cont.c2 > ul').css({'height':(c+80)+'px'})
        }
    }

    b=$('main .container .cont.c4 ul li > img').height()
            
    $('main .container .cont.c4 ul li').find('a').css({'height':b})
        

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