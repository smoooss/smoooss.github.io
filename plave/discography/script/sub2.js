$(document).ready(function(){
    
    $('#main .contentwrap ul li').mouseover(function(){
        a=$('#main .contentwrap ul li').width()
            
            $(this).find('a').css({'height':a,'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })

});
