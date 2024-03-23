$(document).ready(function(){


    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>400){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1100){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1500){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1950){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2350){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2800){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3250){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3650){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4100){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1280){
            if(a>350){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1000){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1400){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1800){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2200){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2600){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3000){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3400){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3800){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>200){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>750){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1100){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1450){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1800){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2150){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2500){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2850){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3200){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>800){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>500){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>800){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1100){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1400){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1700){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2000){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2300){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2600){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>640){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>400){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>650){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>900){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1200){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1500){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1800){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2100){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2400){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>500){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>450){
                $('#main-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>1000){
                for(c=0; c<2; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1300){
                for(c=2; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1600){
                for(c=4; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1900){
                for(c=6; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2200){
                for(c=8; c<10; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2520){
                for(c=10; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2840){
                for(c=12; c<14; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3160){
                for(c=14; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3480){
                for(c=16; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3800){
                for(c=18; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4120){
                for(c=20; c<22; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4440){
                for(c=22; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else{
            if(a>50){
                $('#main-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>250){
                $('#main-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>750){
                for(c=0; c<2; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1020){
                for(c=2; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1290){
                for(c=4; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1560){
                for(c=6; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1830){
                for(c=8; c<10; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2100){
                for(c=10; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2370){
                for(c=12; c<14; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2640){
                for(c=14; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2900){
                for(c=16; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3160){
                for(c=18; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3420){
                for(c=20; c<22; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3680){
                for(c=22; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }
    });
    
});