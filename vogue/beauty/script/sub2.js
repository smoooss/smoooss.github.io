$(document).ready(function(){


    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>400){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1100){
                for(c=0; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1550){
                for(c=4; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2000){
                for(c=8; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2450){
                for(c=12; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2900){
                for(c=16; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3350){
                for(c=20; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1280){
            if(a>350){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1000){
                for(c=0; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1430){
                for(c=4; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1860){
                for(c=8; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2290){
                for(c=12; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2720){
                for(c=16; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3150){
                for(c=20; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>200){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>750){
                for(c=0; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1100){
                for(c=4; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1450){
                for(c=8; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1800){
                for(c=12; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2150){
                for(c=16; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2500){
                for(c=20; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>800){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>550){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>900){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1300){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1650){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2000){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2350){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2700){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3050){
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
            }if(a>730){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1060){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1390){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1720){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2050){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2380){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2710){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>500){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>650){
                $('#main-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>1300){
                $('#main-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1900){
                for(c=0; c<2; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2250){
                for(c=2; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2600){
                for(c=4; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2950){
                for(c=6; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3300){
                for(c=8; c<10; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3650){
                for(c=10; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4000){
                for(c=12; c<14; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4350){
                for(c=14; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4700){
                for(c=16; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5050){
                for(c=18; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5400){
                for(c=20; c<22; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5750){
                for(c=22; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else{
            if(a>50){
                $('#main-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>380){
                $('#main-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>850){
                $('#main-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1400){
                for(c=0; c<2; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1720){
                for(c=2; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2040){
                for(c=4; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2360){
                for(c=6; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2680){
                for(c=8; c<10; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3000){
                for(c=10; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3320){
                for(c=12; c<14; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3640){
                for(c=14; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3960){
                for(c=16; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4280){
                for(c=18; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4600){
                for(c=20; c<22; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4920){
                for(c=22; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }
    });
    
});