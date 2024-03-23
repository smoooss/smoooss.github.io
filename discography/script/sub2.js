$(document).ready(function(){
    
    a=$(window).width()

    if(a>=500){
        $('#main .contentwrap ul li').mouseover(function(){
            $(this).find('a').css({'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })
    }

});