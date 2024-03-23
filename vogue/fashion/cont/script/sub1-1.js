$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel',function(){

        a=$(window).scrollTop();
        b=$(window).width();

        if(a>=30){
            $('#main .aside').css({'position':'fixed','top':'70px'})
            if(b<=800){
                $('#main .aside').css({'position':'absolute','top':'100px'})
            }
        }else{
            $('#main .aside').css({'position':'absolute','top':'100px'})
        }
    });


    
    $('#main .aside .cont ul li').mouseover(function(){
        $(this).find('.name').css({'textDecoration':'underline','text-underline-position':'under'})
    }).mouseout(function(){
        $(this).find('.name').css({'textDecoration':'none'})
    });

    
});