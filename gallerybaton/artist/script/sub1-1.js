$(document).ready(function(){

    $('#main-cont .cont ul li').mouseover(function(){
        var a=$(this).find('.name').width();

        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
    }).mouseout(function(){
        $(this).find('.back').stop().fadeOut(200)
    });

    $('#sub-cont .cont ul li').mouseover(function(){
        var a=$(this).find('a').width();
        
        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
    }).mouseout(function(){
        $(this).find('.back').stop().fadeOut(200)
    });

    


    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main-cont').css({'marginTop':'0','opacity':'1'})
    });



    
    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1280){
            if(a>=80){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=600){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>1024){
            if(a>=50){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=400){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>800){
            if(a>=50){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=250){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>640){
            if(a>=50){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=150){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }
        }else{
            if(a>=10){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=100){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }
        }
    });

});