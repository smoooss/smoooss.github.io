$(document).ready(function(){


    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>300){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1000){
                for(c=0; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1600){
                for(c=4; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2200){
                for(c=8; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2800){
                for(c=12; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3400){
                for(c=16; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4000){
                for(c=20; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1280){
            if(a>250){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>900){
                for(c=0; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1470){
                for(c=4; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2040){
                for(c=8; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2600){
                for(c=12; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3140){
                for(c=16; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3700){
                for(c=20; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>100){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>650){
                for(c=0; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1130){
                for(c=4; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1600){
                for(c=8; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2050){
                for(c=12; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2520){
                for(c=16; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2970){
                for(c=20; c<24; c++){
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
            }if(a>970){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1440){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1910){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2400){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2900){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3350){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3850){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>640){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>350){
                for(c=0; c<3; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>800){
                for(c=3; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1220){
                for(c=6; c<9; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1640){
                for(c=9; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2060){
                for(c=12; c<15; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2480){
                for(c=15; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2900){
                for(c=18; c<21; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3320){
                for(c=21; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>500){
            if(a>50){
                $('#main-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>450){
                $('#main-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>930){
                $('#main-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1500){
                for(c=0; c<2; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1960){
                for(c=2; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2420){
                for(c=4; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2880){
                for(c=6; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3340){
                for(c=8; c<10; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3800){
                for(c=10; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4260){
                for(c=12; c<14; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4720){
                for(c=14; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5180){
                for(c=16; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5640){
                for(c=18; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>6100){
                for(c=20; c<22; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>6580){
                for(c=22; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else{
            if(a>50){
                $('#main-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>250){
                $('#main-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>500){
                $('#main-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1150){
                for(c=0; c<2; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1550){
                for(c=2; c<4; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>1970){
                for(c=4; c<6; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2330){
                for(c=6; c<8; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>2750){
                for(c=8; c<10; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3200){
                for(c=10; c<12; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3530){
                for(c=12; c<14; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>3930){
                for(c=14; c<16; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4300){
                for(c=16; c<18; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>4700){
                for(c=18; c<20; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5100){
                for(c=20; c<22; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>5500){
                for(c=22; c<24; c++){
                    $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }
    });
    
});