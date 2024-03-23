$(document).ready(function(){


    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });

    

    a=$(window).width();
    b=$('#main-ad .main').width();
    c=(750*b)/1400;
    if(a<=1400){
        $('#main-ad .main').css({'height':c})
        $('#main-ad .back').css({'height':c})
    }if(a<=640){
        $('#main-ad .main').css({'height':'350px'})
        $('#main-ad .back').css({'height':'350px'})
    }



    /* nav */
    $('.nav .wrap > ul > li').mouseover(function(){
        $(this).find('ul').stop().slideDown(300)
    }).mouseout(function(){
        $(this).find('ul').stop().slideUp(100)
    });

    $('.navwrap > ul > li').mouseover(function(){
        $(this).find('ul').stop().slideDown(300)
    }).mouseout(function(){
        $(this).find('ul').stop().slideUp(100)
    });





    /* reserve */
    $('.reserve').click(function(){
        $('.book').css({'display':'block'}).animate({'right':'0'},300)
        $('.front').css({'display':'block'})
        $('body').css({'overflow':'hidden'})
    });
    $('.front').not('.book').click(function(){
        $('.book').css({'display':'none'}).animate({'right':'-400px'},300)
        $('.front').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });
    $('.book > a').click(function(){
        $('.book').css({'display':'none'}).animate({'right':'-400px'},300)
        $('.front').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });




    $('.navwrap img').click(function(){
        $('.nav-popup').css({'display':'block'}).animate({'left':'0'},300)
        $('.front').css({'display':'block'})
        $('body').css({'overflow':'hidden'})
    });
    $('.front').click(function(){
        $('.nav-popup').css({'display':'none'}).animate({'left':'-400px'},300)
        $('.front').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });
    $('.nav-popup > a').click(function(){
        $('.nav-popup').css({'display':'none'}).animate({'left':'-400px'},300)
        $('.front').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });

        


    /* main ad */
    $(window).on('click resize',function(){
        a=$(window).width();
        b=$('#main-ad .main').width();
        c=(750*b)/1400;

        if(a>1400){
            $('#main-ad .main').css({'height':'750px'})
            $('#main-ad .back').css({'height':'750px'})
        }if(a<=1400){
            $('#main-ad .main').css({'height':c})
            $('#main-ad .back').css({'height':c})
        }if(a<=640){
            $('#main-ad .main').css({'height':'350px'})
            $('#main-ad .back').css({'height':'350px'})
        }
    });




    $('.top').click(function(){
        a=$('#main-ad .main').height();

        $('html,body').animate({scrollTop:a},500)
    });




    /* footer */
    setInterval(function(){
        a=$('#footer .slider').width();
        b=$('#footer .sliderwrap').width();
        c=b-a;

        $('#footer .slider').animate({'left':c},50000, 'linear')
    });

    /*
    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();

        if(a>=750){
            $('.reserve').css({'position':'fixed','top':'50px','right':'50px','backgroundColor':'#000000','border':'none'})
            
            $('.reserve').mouseover(function(){
                $(this).css({'color':'#ffffff','fontWeight':'700'})
            }).mouseout(function(){
                $(this).css({'transition':'0.3s','color':'#ffffff','fontWeight':'400'})
            })
        }else{
            $('.reserve').css({'position':'none','top':'none','right':'none','backgroundColor':'none','border':'1px solid #ffffff'})
            
            $('.reserve').mouseover(function(){
                $(this).css({'color':'#000000'})
            }).mouseout(function(){
                $(this).css({'transition':'0.3s','color':'#ffffff','fontWeight':'400'})
            })
        }
    });*/

});