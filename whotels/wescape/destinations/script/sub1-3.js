$(document).ready(function(){



    $('#main-cont .cont ul li').mouseover(function(){
        $(this).find('.img').css({'backgroundSize':'110%'})
    }).mouseout(function(){
        $(this).find('.img').css({'backgroundSize':'100%'})
    });





    a=$('#main-cont .cont ul li').width();
    b=(380*a)/600;
        
    $('#main-cont .cont ul li .img').css({'height':b})

    $(window).on('resize',function(){
        a=$('#main-cont .cont ul li').width();
        b=(380*a)/600;
            
        $('#main-cont .cont ul li .img').css({'height':b})
    });






    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>=250){
                $('#title').css({'opacity':'1'})
            }if(a>=600){
                for(c=0; c<=1; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1300){
                for(c=2; c<=3; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2000){
                for(c=4; c<=5; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2650){
                for(c=6; c<=7; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3300){
                for(c=8; c<=9; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4000){
                for(c=10; c<=11; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4650){
                for(c=12; c<=13; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=5300){
                for(c=14; c<=15; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=6000){
                for(c=16; c<=17; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1280){
            if(a>=150){
                $('#title').css({'opacity':'1'})
            }if(a>=600){
                for(c=0; c<=1; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1250){
                for(c=2; c<=3; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1900){
                for(c=4; c<=5; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2550){
                for(c=6; c<=7; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3150){
                for(c=8; c<=9; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3750){
                for(c=10; c<=11; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4400){
                for(c=12; c<=13; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4950){
                for(c=14; c<=15; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=5600){
                for(c=16; c<=17; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=400){
                for(c=0; c<=1; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=940){
                for(c=2; c<=3; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1480){
                for(c=4; c<=5; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2020){
                for(c=6; c<=7; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2560){
                for(c=8; c<=9; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3100){
                for(c=10; c<=11; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3640){
                for(c=12; c<=13; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4180){
                for(c=14; c<=15; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4720){
                for(c=16; c<=17; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>800){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=250){
                for(c=0; c<=1; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=790){
                for(c=2; c<=3; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1280){
                for(c=4; c<=5; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1770){
                for(c=6; c<=7; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2280){
                for(c=8; c<=9; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2790){
                for(c=10; c<=11; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3300){
                for(c=12; c<=13; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3810){
                for(c=14; c<=15; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=4320){
                for(c=16; c<=17; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>640){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=100){
                for(c=0; c<=1; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=580){
                for(c=2; c<=3; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1040){
                for(c=4; c<=5; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1490){
                for(c=6; c<=7; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1970){
                for(c=8; c<=9; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2400){
                for(c=10; c<=11; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=2830){
                for(c=12; c<=13; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3260){
                for(c=14; c<=15; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=3740){
                for(c=16; c<=17; c++){
                    $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>499){
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=150){
                $('#main-cont .cont ul li').eq(0).css({'opacity':'1'})
            }if(a>=700){
                $('#main-cont .cont ul li').eq(1).css({'opacity':'1'})
            }if(a>=1200){
                $('#main-cont .cont ul li').eq(2).css({'opacity':'1'})
            }if(a>=1700){
                $('#main-cont .cont ul li').eq(3).css({'opacity':'1'})
            }if(a>=2200){
                $('#main-cont .cont ul li').eq(4).css({'opacity':'1'})
            }if(a>=2700){
                $('#main-cont .cont ul li').eq(5).css({'opacity':'1'})
            }if(a>=3200){
                $('#main-cont .cont ul li').eq(6).css({'opacity':'1'})
            }if(a>=3700){
                $('#main-cont .cont ul li').eq(7).css({'opacity':'1'})
            }if(a>=4200){
                $('#main-cont .cont ul li').eq(8).css({'opacity':'1'})
            }if(a>=4700){
                $('#main-cont .cont ul li').eq(9).css({'opacity':'1'})
            }if(a>=5200){
                $('#main-cont .cont ul li').eq(10).css({'opacity':'1'})
            }if(a>=5700){
                $('#main-cont .cont ul li').eq(11).css({'opacity':'1'})
            }if(a>=6200){
                $('#main-cont .cont ul li').eq(12).css({'opacity':'1'})
            }if(a>=6700){
                $('#main-cont .cont ul li').eq(13).css({'opacity':'1'})
            }if(a>=7200){
                $('#main-cont .cont ul li').eq(14).css({'opacity':'1'})
            }if(a>=7700){
                $('#main-cont .cont ul li').eq(15).css({'opacity':'1'})
            }if(a>=8200){
                $('#main-cont .cont ul li').eq(16).css({'opacity':'1'})
            }
        }else{
            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=100){
                $('#main-cont .cont ul li').eq(0).css({'opacity':'1'})
            }if(a>=570){
                $('#main-cont .cont ul li').eq(1).css({'opacity':'1'})
            }if(a>=1000){
                $('#main-cont .cont ul li').eq(2).css({'opacity':'1'})
            }if(a>=1470){
                $('#main-cont .cont ul li').eq(3).css({'opacity':'1'})
            }if(a>=1900){
                $('#main-cont .cont ul li').eq(4).css({'opacity':'1'})
            }if(a>=2320){
                $('#main-cont .cont ul li').eq(5).css({'opacity':'1'})
            }if(a>=2760){
                $('#main-cont .cont ul li').eq(6).css({'opacity':'1'})
            }if(a>=3200){
                $('#main-cont .cont ul li').eq(7).css({'opacity':'1'})
            }if(a>=3650){
                $('#main-cont .cont ul li').eq(8).css({'opacity':'1'})
            }if(a>=4100){
                $('#main-cont .cont ul li').eq(9).css({'opacity':'1'})
            }if(a>=4500){
                $('#main-cont .cont ul li').eq(10).css({'opacity':'1'})
            }if(a>=4950){
                $('#main-cont .cont ul li').eq(11).css({'opacity':'1'})
            }if(a>=5400){
                $('#main-cont .cont ul li').eq(12).css({'opacity':'1'})
            }if(a>=5800){
                $('#main-cont .cont ul li').eq(13).css({'opacity':'1'})
            }if(a>=6250){
                $('#main-cont .cont ul li').eq(14).css({'opacity':'1'})
            }if(a>=6650){
                $('#main-cont .cont ul li').eq(15).css({'opacity':'1'})
            }if(a>=7100){
                $('#main-cont .cont ul li').eq(16).css({'opacity':'1'})
            }
        }
        
    });
    
});
