$(document).ready(function(){



    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });




    a=$(window).width();

    $('#header .header .wrap').css({'marginTop':'35px'})
        
    if(a<=1000){
        $('#header .header .logo').css({'marginTop':'40px'})
        $('#header .header .wrap').css({'marginTop':'32px'})
        if(a<=800){
            $('#header .header .logo').css({'marginTop':'25px'})
            $('#header .header .wrap').css({'marginTop':'0'})
        }
    }else{
        $('#header .header .logo').css({'marginTop':'35px'})
    }



    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).width();

        $('#header .header .wrap').css({'marginTop':'35px'})

        if(a<=1000){
            $('#header .header .logo').css({'marginTop':'40px'})
            $('#header .header .wrap').css({'marginTop':'32px'})
            if(a<=800){
                $('#header .header .logo').css({'marginTop':'25px'})
                $('#header .header .wrap').css({'marginTop':'0'})
            }
        }else{
            $('#header .header .logo').css({'marginTop':'35px'})
        }
    });




    $('#header .header .nav > ul > li').mouseover(function(){
        $(this).find('ul li').stop().fadeIn(200)

        a=$(window).width();

        if(a<=800){
            $(this).find('ul').css({'marginLeft':'-10px'})
            $(this).find('ul li').css({'marginRight':'-1px','padding':'10px','backgroundColor':'#ffffff'})
            $(this).find('ul li a').css({'color':'#333333'})
        }else{
            $(this).find('ul').css({'marginLeft':'0'})
            $(this).find('ul li').css({'padding':'0','backgroundColor':'unset'})
        }
    }).mouseout(function(){
        $(this).find('ul li').stop().fadeOut(100)
    });



    $('#header .header .navwrap > ul > li').mouseover(function(){
        $(this).find('ul li').stop().fadeIn(200)
    }).mouseout(function(){
        $(this).find('ul li').stop().fadeOut(100)
    });



    $('#header .header .wrap .lang').mouseover(function(){
        $(this).find('ul').stop().fadeIn(200)
    }).mouseout(function(){
        $(this).find('ul').stop().fadeOut(100)
    });
    
});