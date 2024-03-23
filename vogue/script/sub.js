$(document).ready(function(){



    a=$(window).width();
    b=$('#main-ad').width();
    c=(590*b)/1240;

    if(a>1400){
        $('#main-ad').css({'height':'590px'})
        $('#main-ad .image').css({'height':'590px'})
    }if(a<=1400){
        $('#main-ad').css({'height':c})
        $('#main-ad .image').css({'height':c})
    }if(a<=650){
        $('#main-ad').css({'height':'280px'})
        $('#main-ad .image').css({'height':'280px'})
    }



    $('#main-ad').mouseover(function(){
        $(this).find('.name').css({'textDecoration':'underline','text-underline-position':'under'})
    }).mouseout(function(){
        $(this).find('.name').css({'textDecoration':'none'})
    });




    $('.cont ul li').mouseover(function(){
        $(this).find('.name').css({'textDecoration':'underline','text-underline-position':'under'})
    }).mouseout(function(){
        $(this).find('.name').css({'textDecoration':'none'})
    });



    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).width();
        b=$('#main-ad').width();
        c=(590*b)/1240;

        if(a>1400){
            $('#main-ad').css({'height':'590px'})
            $('#main-ad .image').css({'height':'590px'})
        }if(a<=1400){
            $('#main-ad').css({'height':c,'transition':'none'})
            $('#main-ad .image').css({'height':c,'transition':'none'})
        }if(a<=650){
            $('#main-ad').css({'height':'280px'})
            $('#main-ad .image').css({'height':'280px'})
        }
    });
});