$(document).ready(function(){
    
    $('main .container ul li').mouseover(function(){
        a=$('main .container ul li').width()
            
            $(this).find('a').css({'height':a,'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })

});