$(document).ready(function(){


    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main-ad').css({'marginTop':'0','opacity':'1'})
    });



    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1280){

            if(a>=200){
                for(c=0; c<=2; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=500){
                for(c=3; c<=5; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=800){
                for(c=6; c<=11; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>1024){

            if(a>=200){
                for(c=0; c<=1; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=500){
                for(c=2; c<=3; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=800){
                for(c=4; c<=5; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1100){
                for(c=6; c<=11; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>800){

            if(a>=150){
                for(c=0; c<=1; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=450){
                for(c=2; c<=3; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=750){
                for(c=4; c<=5; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1050){
                for(c=6; c<=11; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>640){

            if(a>=50){
                for(c=0; c<=1; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=300){
                for(c=2; c<=3; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=500){
                for(c=4; c<=5; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=700){
                for(c=6; c<=11; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else{
            if(a>=10){
                $('.contentswrap .cont').eq(0).css({'marginTop':'0','opacity':'1'})
            }if(a>=350){
                $('.contentswrap .cont').eq(1).css({'marginTop':'0','opacity':'1'})
            }if(a>=650){
                $('.contentswrap .cont').eq(2).css({'marginTop':'0','opacity':'1'})
            }if(a>=950){
                $('.contentswrap .cont').eq(3).css({'marginTop':'0','opacity':'1'})
            }if(a>=1250){
                $('.contentswrap .cont').eq(4).css({'marginTop':'0','opacity':'1'})
            }if(a>=1550){
                $('.contentswrap .cont').eq(5).css({'marginTop':'0','opacity':'1'})
            }if(a>=1850){
                $('.contentswrap .cont').eq(6).css({'marginTop':'0','opacity':'1'})
            }if(a>=2150){
                $('.contentswrap .cont').eq(7).css({'marginTop':'0','opacity':'1'})
            }if(a>=2450){
                $('.contentswrap .cont').eq(8).css({'marginTop':'0','opacity':'1'})
            }if(a>=2750){
                for(c=9; c<=11; c++){
                    $('.contentswrap .cont').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }
        
    });





    $('#main-cont .more').click(function(){

        a=$(window).width();

        if(a<=1200){

            for(b=8; b<=11; b++){
         
                $('#main-cont .cont').eq(b).css({'transition':'none','marginTop':'30px','opacity':'1'})
                $('#main-cont .cont').eq(b).fadeIn(700)
                $('#main-cont .more').css({'display':'none'})
                $('#main-cont .less').fadeIn(300).css({'display':'block'})
            }

        }if(a>1200){

            for(b=9; b<=11; b++){
         
                $('#main-cont .cont').eq(b).css({'transition':'none','marginTop':'30px','opacity':'1'})
                $('#main-cont .cont').eq(b).fadeIn(700)
                $('#main-cont .more').css({'display':'none'})
                $('#main-cont .less').fadeIn(300).css({'display':'block'})
            }
        }if(a<=1200){
            
            for(b=8; b<=11; b++){
         
                $('#main-cont .cont').eq(b).css({'transition':'none','marginTop':'30px','opacity':'1'})
                $('#main-cont .cont').eq(b).fadeIn(700)
                $('#main-cont .more').css({'display':'none'})
                $('#main-cont .less').fadeIn(300).css({'display':'block'})
            }
        }
        
    });
 



    $('#main-ad .cont').mouseover(function(){
        var a=$(this).find('.name').width();
        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
    }).mouseout(function(){
        $(this).find('.back').stop().fadeOut(200)
    });


    $('.contentswrap .cont').mouseover(function(){
        a=$(window).width();

        if(a>=500){
            $(this).find('.front').stop().fadeIn(200)
        }
    }).mouseout(function(){
        if(a>=500){
            $(this).find('.front').stop().fadeOut(300)
        }
    });




    a=$('#main-cont .contentswrap .cont .image').width();
    b=$('#main-cont .contentswrap .cont .image').height();

    $('#main-cont .contentswrap .cont .front a').css({'width':a,'height':b})


    $(window).on('resize' ,function(){
        a=$('#main-cont .contentswrap .cont .image').width();
        b=$('#main-cont .contentswrap .cont .image').height();

        $('#main-cont .contentswrap .cont .front a').css({'width':a,'height':b})
    });




    $('#main-cont .less').click(function(){
        a=$(window).width();

        if(a<=1200){
            for(b=8; b<=11; b++){
         
                $('#main-cont .cont').eq(b).css({'transition':'0.1s','opacity':'0'})
                $('#main-cont .cont').eq(b).fadeOut(300)
                $('#main-cont .less').css({'display':'none'})
                $('#main-cont .more').fadeIn(300)
                }
        }if(a>1200){
            for(b=9; b<=11; b++){
         
                $('#main-cont .cont').eq(b).css({'transition':'0.1s','opacity':'0'})
                $('#main-cont .cont').eq(b).fadeOut(300)
                $('#main-cont .less').css({'display':'none'})
                $('#main-cont .more').fadeIn(300)
                }
        }
    });

});