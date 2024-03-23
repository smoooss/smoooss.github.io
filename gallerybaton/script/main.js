$(document).ready(function(){




    $('.c2 ul li').click(tab);

    function tab(){
        idx = $(this).index()+1;
        $('.c1 ul li').eq(idx-1).fadeIn(500).siblings().css({'display':'none'});
        $('.c2 ul li').eq(idx-1).addClass('tab').siblings().removeClass('tab');
        if(idx==5){
            idx = 0;
        }
    }

    $('.c2 ul li').mouseover(function(){
        var a=$(this).find('.name').width();
        $(this).find('.back').css({'width':a}).stop().fadeIn(100)
    }).mouseout(function(){
        $(this).find('.back').stop().fadeOut(200)
    });




    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main-ad').css({'marginTop':'0','opacity':'1'})
    });



    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1280){

            if(a>=200){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=600){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=900){
                $('#sub-ad .cont').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>1024){

            if(a>=100){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=500){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=800){
                $('#sub-ad .cont').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>800){

            if(a>=100){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=400){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=700){
                $('#sub-ad .cont').css({'marginTop':'0','opacity':'1'})
            }
        }else if(b>640){

            if(a>=10){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=300){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=600){
                $('#sub-ad .cont').css({'marginTop':'0','opacity':'1'})
            }
        }else{

            if(a>=10){
                $('.c1').css({'marginTop':'0','opacity':'1'})
            }if(a>=250){
                $('.c2').css({'marginTop':'0','opacity':'1'})
            }if(a>=500){
                $('#sub-ad .cont').css({'marginTop':'0','opacity':'1'})
            }
        }
    });

});