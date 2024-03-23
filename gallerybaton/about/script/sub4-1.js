$(document).ready(function(){



    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main-cont').css({'marginTop':'0','opacity':'1'})
    });



    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1280){
            if(a>=130){
                $('.p1').css({'marginTop':'0','opacity':'1'})
            }if(a>=260){
                $('.p2').css({'marginTop':'0','opacity':'1'})
            }if(a>=360){
                $('.p3').css({'marginTop':'0','opacity':'1'})
            }if(a>=500){
                $('#main-cont form').css({'marginTop':'60px','opacity':'1'})
            }
        }else if(b>1024){
            if(a>=100){
                $('.p1').css({'marginTop':'0','opacity':'1'})
            }if(a>=200){
                $('.p2').css({'marginTop':'0','opacity':'1'})
            }if(a>=300){
                $('.p3').css({'marginTop':'0','opacity':'1'})
            }if(a>=400){
                $('#main-cont form').css({'marginTop':'60px','opacity':'1'})
            }
        }else{
            if(a>=50){
                $('.p1').css({'marginTop':'0','opacity':'1'})
            }if(a>=100){
                $('.p2').css({'marginTop':'0','opacity':'1'})
            }if(a>=200){
                $('.p3').css({'marginTop':'0','opacity':'1'})
            }if(a>=300){
                $('#main-cont form').css({'marginTop':'60px','opacity':'1'})
            }
        }
    });

});