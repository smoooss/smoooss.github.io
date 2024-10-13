$(document).ready(function(){

    a=$(window).width()

    if(a>=500){

        $('main .container .cont.c2 ul li .title ul li').click(script);
        
        let index = 0
    
        function script(){
            
            index = $(this).index()+1;
            $('main .container .cont.c2 ul li .script ul li').eq(index-1).fadeIn(300).siblings().fadeOut(100)

            d=$('main .container .cont.c2 ul li .script ul li').eq(index-1).height()
            $('main .container .cont.c2 > ul').css({'height':(d+80)+'px'})
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

        c=$('main .container .cont.c4 ul li > img').height()

        $('main .container .cont.c4 ul li').find('a').css({'height':c})
        
    });

});