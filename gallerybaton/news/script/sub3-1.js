$(document).ready(function(){



    $('#main-cont .cont').mouseover(function(){
        var a=$(this).find('.name').width();

        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
    }).mouseout(function(){
        $(this).find('.back').stop().fadeOut(200)
    });
    



    $('#sub-cont .cont').mouseover(function(){
        var a=$(this).find('.name').width();

       $(this).find('.back').css({'width':a}).stop().fadeIn(50)
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
            if(a>=300){
                $('.contentswrap .cont.c1').css({'marginTop':'0','opacity':'1'})
                $('.contentswrap .cont.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=550){
                $('.contentswrap .cont.c3').css({'marginTop':'0','opacity':'1'})
                $('.contentswrap .cont.c4').css({'marginTop':'0','opacity':'1'})
            }if(a>=700){
                $('.contentswrap .cont.c5').css({'marginTop':'0','opacity':'1'})
                $('.contentswrap .cont.c6').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>1024){
            if(a>=300){
                $('.contentswrap .cont.c1').css({'marginTop':'0','opacity':'1'})
                $('.contentswrap .cont.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=450){
                $('.contentswrap .cont.c3').css({'marginTop':'0','opacity':'1'})
                $('.contentswrap .cont.c4').css({'marginTop':'0','opacity':'1'})
            }if(a>=600){
                $('.contentswrap .cont.c5').css({'marginTop':'0','opacity':'1'})
                $('.contentswrap .cont.c6').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>800){
            if(a>=100){
                $('.contentswrap .cont.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=300){
                $('.contentswrap .cont.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=500){
                $('.contentswrap .cont.c3').css({'marginTop':'0','opacity':'1'})
            }if(a>=700){
                $('.contentswrap .cont.c4').css({'marginTop':'0','opacity':'1'})
            }if(a>=900){
                $('.contentswrap .cont.c5').css({'marginTop':'0','opacity':'1'})
            }if(a>=1100){
                $('.contentswrap .cont.c6').css({'marginTop':'0','opacity':'1'})
            }
        }else{
            if(a>=10){
                $('.contentswrap .cont.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=150){
                $('.contentswrap .cont.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=300){
                $('.contentswrap .cont.c3').css({'marginTop':'0','opacity':'1'})
            }if(a>=450){
                $('.contentswrap .cont.c4').css({'marginTop':'0','opacity':'1'})
            }if(a>=600){
                $('.contentswrap .cont.c5').css({'marginTop':'0','opacity':'1'})
            }if(a>=750){
                $('.contentswrap .cont.c6').css({'marginTop':'0','opacity':'1'})
            }
        }
    });





    $('#sub-cont .more').click(function(){

       for(b=6; b<=12; b++){
        
            $('#sub-cont .cont').eq(b).css({'transition':'none','marginTop':'0','opacity':'1'})
            $('#sub-cont .cont').eq(b).fadeIn(700)
            $('#sub-cont .more').css({'display':'none'})
            $('#sub-cont .less').fadeIn(300)
        }
    });

    $('#sub-cont .less').click(function(){

        for(b=6; b<=12; b++){
        
            $('#sub-cont .cont').eq(b).css({'transition':'0.1s','opacity':'0'})
            $('#sub-cont .cont').eq(b).slideUp(700)
            $('#sub-cont .less').css({'display':'none'})
            $('#sub-cont .more').fadeIn(300)
        }
    });

});