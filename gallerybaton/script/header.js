$(document).ready(function(){


    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });


    
    $('.nav ul li').eq(4).click(function(){
        $(this).css({'display':'none'})
        $('.nav ul li').eq(5).css({'display':'block'})
    });

    $('.nav ul li').eq(5).click(function(){
        $(this).css({'display':'none'})
        $('.nav ul li').eq(4).css({'display':'block'})
    });



    $('.nav ul li').mouseover(function(){
        var a=$(this).find('a').width();
        $(this).find('span').css({'width':a}).stop().fadeIn(100)
    }).mouseout(function(){
        $(this).find('span').stop().fadeOut(200)
    })




    $('#header .header .nav i').click(function(){
        $(this).stop().fadeOut(100)
        $('.nav ul li').eq(6).css({'display':'block'})
        $('.nav ul').stop().slideDown()
    });

    $('.nav ul li').eq(6).click(function(){
        $('.nav ul').stop().slideUp(100)
        $('.nav ul li').eq(6).css({'display':'none'})
        $('#header .header .nav i').stop().fadeIn(500)
    });



    $(window).resize(function(){
        a=$(window).width();

        if(a>800){
            $('.nav ul').css({'display':'flex'})
        }else{
            $('.nav ul').css({'display':'none'})
        }
    });


    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();

        if(a>=600){
            $('.btn i').stop().slideDown()
        }else{
            $('.btn i').stop().slideUp()
        }
    });

    $('.btn i').click(function(){
        $('html,body').animate({scrollTop:'0'},500)
    });


});