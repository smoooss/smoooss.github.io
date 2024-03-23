$(document).ready(function(){


    a=$('#main-ad .main').width();
    b=(650*a)/1240;
    c=$(window).width();

    if(c>1400){
        $('#main-ad .main').css({'height':'650px'})
    }if(c>640){
        $('#main-ad .main').css({'height':b})
    }else{
        $('#main-ad .main').css({'height':'293px'})
    }




    $(window).on('resize',function(){
        a=$('#main-ad .main').width();
        b=(650*a)/1240;
        c=$(window).width();

        if(c>1400){
            $('#main-ad .main').css({'height':'650px'})
        }if(c>640){
            $('#main-ad .main').css({'height':b})
        }else{
            $('#main-ad .main').css({'height':'293px'})
        }
    });





    $(window).on('scroll touchmove mousewheel',function(){
        
        a=$(window).scrollTop();
        b=$(window).width();
        
        if(b>1400){

            if(a>=200){
                $('.title').css({'opacity':'1'})
            }if(a>=700){
                for(c=0; c<3; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1500){
                for(c=3; c<4; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
            if(a>=2200){
                for(c=4; c<=6; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1280){

            if(a>=150){
                $('.title').css({'opacity':'1'})
            }if(a>=600){
                for(c=0; c<3; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1450){
                for(c=3; c<4; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
            if(a>=2100){
                for(c=4; c<=6; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1024){

            if(a>=100){
                $('.title').css({'opacity':'1'})
            }if(a>=450){
                for(c=0; c<3; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1150){
                for(c=3; c<4; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
            if(a>=1700){
                for(c=4; c<=6; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>800){

            if(a>=50){
                $('.title').css({'opacity':'1'})
            }if(a>=300){
                for(c=0; c<3; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=900){
                for(c=3; c<4; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
            if(a>=1350){
                for(c=4; c<=6; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>640){
            if(a>=50){
                $('.title').css({'opacity':'1'})
            }if(a>=200){
                for(c=0; c<3; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=650){
                for(c=3; c<4; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
            if(a>=1000){
                for(c=4; c<=6; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else{
            if(a>=10){
                $('.title').css({'opacity':'1'})
            }if(a>=200){
                for(c=0; c<3; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=650){
                for(c=3; c<4; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
            if(a>=950){
                for(c=4; c<=6; c++){
                    $('.cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }
    });







    /* nav */
    $('.nav .wrap > ul > li').mouseover(function(){
        $(this).find('ul').stop().slideDown(300)
    }).mouseout(function(){
        $(this).find('ul').stop().slideUp(100)
    });

    $('.navwrap > ul > li').mouseover(function(){
        $(this).find('ul').stop().slideDown(300)
        $(this).find('ul').css({'backgroundColor':'#ffffff'})
    }).mouseout(function(){
        $(this).find('ul').stop().slideUp(100)
    });





    /* reserve */
    $('.reserve').click(function(){
        $('.book').css({'display':'block'}).animate({'right':'0'},300)
        $('.back').css({'display':'block'})
        $('body').css({'overflow':'hidden'})
    });
    
    $('.back').not('.book').click(function(){
        $('.book').css({'display':'none'}).animate({'right':'-400px'},300)
        $('.back').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });
    $('.book > a').click(function(){
        $('.book').css({'display':'none'}).animate({'right':'-400px'},300)
        $('.back').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });


    $('.navwrap img').click(function(){
        $('.nav-popup').css({'display':'block'}).animate({'left':'0'},300)
        $('.back').css({'display':'block'})
        $('body').css({'overflow':'hidden'})
    });
    $('.back').click(function(){
        $('.nav-popup').css({'display':'none'}).animate({'left':'-400px'},300)
        $('.back').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });
    $('.nav-popup > a').click(function(){
        $('.nav-popup').css({'display':'none'}).animate({'left':'-400px'},300)
        $('.back').css({'display':'none'})
        $('body').css({'overflow':'auto'})
    });




    /* footer */
    setInterval(function(){
        a=$('#footer .slider').width();
        b=$('#footer .sliderwrap').width();
        c=b-a;

        $('#footer .slider').animate({'left':c},50000, 'linear')
    });
    
});