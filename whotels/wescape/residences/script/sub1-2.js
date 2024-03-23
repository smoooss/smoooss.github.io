$(document).ready(function(){



    $('.menu ul li').click(menu);
    let idx = 0

    function menu(){
        idx = $(this).index()+1;
        $('.cont').css({'display':'none'})
        $('.c'+idx).fadeIn(300).css({'display':'flex'})
        $('.menu ul li').eq(idx-1).addClass('on').siblings().removeClass('on')
        if(idx==4){
            idx = 0;
        }
    }



    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>=250){
                $('#title').css({'opacity':'1'})
            }if(a>=550){
                $('#main-cont h3').css({'opacity':'1'})
                $('#main-cont .menu').css({'opacity':'1'})
            }if(a>=800){
                $('#main-cont .cont').css({'opacity':'1'})
            }if(a>=900){
                $('#main-cont .cont').css({'transition':'none'})
            }
        }else if(b>1280){
            if(a>=150){
                $('#title').css({'opacity':'1'})
            }if(a>=450){
                $('#main-cont h3').css({'opacity':'1'})
                $('#main-cont .menu').css({'opacity':'1'})
            }if(a>=700){
                $('#main-cont .cont').css({'opacity':'1'})
            }if(a>=800){
                $('#main-cont .cont').css({'transition':'none'})
            }
        }else if(b>1024){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=300){
                $('#main-cont h3').css({'opacity':'1'})
                $('#main-cont .menu').css({'opacity':'1'})
            }if(a>=500){
                $('#main-cont .cont').css({'opacity':'1'})
            }if(a>=600){
                $('#main-cont .cont').css({'transition':'none'})
            }
        }else if(b>800){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=200){
                $('#main-cont h3').css({'opacity':'1'})
                $('#main-cont .menu').css({'opacity':'1'})
            }if(a>=350){
                $('#main-cont .cont').css({'opacity':'1'})
            }if(a>=450){
                $('#main-cont .cont').css({'transition':'none'})
            }
        }else if(b>640){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=100){
                $('#main-cont h3').css({'opacity':'1'})
                $('#main-cont .menu').css({'opacity':'1'})
            }if(a>=200){
                $('#main-cont .cont').css({'opacity':'1'})
            }if(a>=300){
                $('#main-cont .cont').css({'transition':'none'})
            }
        }else{
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=100){
                $('#main-cont h3').css({'opacity':'1'})
                $('#main-cont .menu').css({'opacity':'1'})
            }if(a>=150){
                $('#main-cont .cont').css({'opacity':'1'})
            }if(a>=250){
                $('#main-cont .cont').css({'transition':'none'})
            }
        }
        
    });
    
});
