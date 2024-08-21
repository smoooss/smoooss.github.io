$(document).ready(function(){

    
    a=$(window).width()

    if(a>=500){

        $('#main .contentwrap .cont.c2 ul li .title ul li').click(script);
        
        function script(){
            $('#main .contentwrap .cont.c2 ul li .script ul li').fadeIn(300)
            $('#main .contentwrap .cont.c2 > ul').css({'height':'290px'})
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

        b=$('#main .contentwrap .cont.c4 ul li > img').height()

        $('#main .contentwrap .cont.c4 ul li').find('a').css({'height':b})
        
    });

});
