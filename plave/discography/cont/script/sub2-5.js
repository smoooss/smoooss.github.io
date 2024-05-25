$(document).ready(function(){

    a=$(window).width()

    if(a>=500){

        $('#main .contentwrap .cont.c2 ul li .title ul li').click(script);
        
        let index = 0
    
        function script(){
            index = $(this).index()+1;
            $('#main .contentwrap .cont.c2 ul li .script ul li').eq(index-1).fadeIn(300).siblings().fadeOut(100)
        }
    }

    b=$('#main .contentwrap .cont.c4 ul li > img').height()
            
    $('#main .contentwrap .cont.c4 ul li').find('a').css({'height':b})
        

    $('#main .contentwrap .cont.c4 ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    })

    $(window).on('resize',function(){

        c=$('#main .contentwrap .cont.c4 ul li > img').height()

        $('#main .contentwrap .cont.c4 ul li').find('a').css({'height':c})
        
    });

});
