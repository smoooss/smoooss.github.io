$(document).ready(function(){
    
    $('main .container ul li').mouseover(function(){

            $(this).find('a').css({'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })

});
