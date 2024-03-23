$(document).ready(function(){

    $('#sub-cont .title ul li').eq(0).click(function(){
        var a=$(this).find('.name').width();

        $('#sub-cont .sliderwrap .slider').animate({'marginLeft':'0'},500)
        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
        $('#sub-cont .title ul li').find('.back').eq(1).fadeOut(100)
    });

    $('#sub-cont .title ul li').eq(2).click(function(){
        var a=$(this).find('.name').width();

        $('#sub-cont .sliderwrap .slider').animate({'marginLeft':'-100%'},500)
        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
        $('#sub-cont .title ul li').find('.back').eq(0).fadeOut(100)
    });




    $('.cont.c1 ul li').mouseover(function(){
        var a=$(this).find('.name').width();

       $(this).find('.back').css({'width':a}).stop().fadeIn(50)
    }).mouseout(function(){
        $(this).find('.back').stop().fadeOut(200)
    });




    $('.cont.c2 ul > li > a > ul').mouseover(function(){
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
            if(a>=200){
                for(b=0; b<2; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=650){
                for(b=2; b<4; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>=150){
                for(b=0; b<2; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=500){
                for(b=2; b<4; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>800){
            if(a>=50){
                for(b=0; b<2; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=300){
                for(b=2; b<4; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>640){
            if(a>=10){
                for(b=0; b<2; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=200){
                for(b=2; b<4; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else{
            if(a>=10){
                for(b=0; b<2; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=100){
                for(b=2; b<4; b++){
                    $('.slider .cont.c1 ul li').eq(b).css({'marginTop':'0','opacity':'1'})
                }
            }
        }
    });



        a=$('#sub-cont .sliderwrap .slider .cont.c1 > ul').height();

        $('#sub-cont .sliderwrap').css({'height':a})
        $('#sub-cont .sliderwrap .slider .cont.c2 > ul').css({'height':a})




    $(window).on('scroll touchmove mousewheel click resize',function(){
        a=$('#sub-cont .sliderwrap .slider .cont.c1 > ul').height();
        b=$('#main-cont .cont .image').width();

        $('#sub-cont .sliderwrap').css({'height':a})
        $('#sub-cont .sliderwrap .slider .cont.c2 > ul').css({'height':a})
        $('#main-cont .cont .image').css({'height':b})
    });
});