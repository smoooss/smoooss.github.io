$(document).ready(function(){



    $('.menu ul li').click(menu);
    let idx = 0

    function menu(){
        idx = $(this).index()+1;
        $('.w1 .cont li:nth-child(n+7)').css({'display':'none'})
        $('.w2 .cont li:nth-child(n+7)').css({'display':'none'})
        if(idx==4){
            idx = 0;
        }
    }




        a=$('#main-cont .contentwrap .title').width();
        b=(360*a)/1240;
        c=$(window).width();

        if(c>1400){
            $('#main-cont .contentwrap .title').css({'height':'360px'})
            $('#main-cont .contentwrap .title .back').css({'height':'360px'})

        }if(c>800){
            $('#main-cont .contentwrap .title').css({'height':b})
            $('#main-cont .contentwrap .title .back').css({'height':b})
        }else{
            $('#main-cont .contentwrap .title').css({'height':'180px'})
            $('#main-cont .contentwrap .title .back').css({'height':'180px'})
        }




    $(window).on('resize',function(){
        a=$('#main-cont .contentwrap .title').width();
        b=(360*a)/1240;
        c=$(window).width();

        if(c>1400){
            $('#main-cont .contentwrap .title').css({'height':'360px'})
            $('#main-cont .contentwrap .title .back').css({'height':'360px'})

        }if(c>800){
            $('#main-cont .contentwrap .title').css({'height':b})
            $('#main-cont .contentwrap .title .back').css({'height':b})
        }else{
            $('#main-cont .contentwrap .title').css({'height':'180px'})
            $('#main-cont .contentwrap .title .back').css({'height':'180px'})
        }
    });





    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>=200){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=800){
                for(c=0; c<3; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1600){
                for(c=3; c<6; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1280){
            if(a>=200){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=700){
                for(c=0; c<3; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1400){
                for(c=3; c<6; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>=50){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=450){
                for(c=0; c<3; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=950){
                for(c=3; c<6; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>800){
            if(a>=50){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=300){
                for(c=0; c<2; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>900){
                for(c=2; c<4; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1500){
                for(c=4; c<6; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>640){
            if(a>=50){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=100){
                for(c=0; c<2; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>650){
                for(c=2; c<4; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1200){
                for(c=4; c<6; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else if(b>500){
            if(a>=50){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=100){
                for(c=0; c<2; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>650){
                for(c=2; c<4; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }if(a>=1100){
                for(c=4; c<6; c++){
                    $('.w1 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w2 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w3 .cont ul li').eq(c).css({'opacity':'1'})
                    $('.w4 .cont ul li').eq(c).css({'opacity':'1'})
                }
            }
        }else{
            if(a>=50){
                $('#main-cont .contentwrap .title').css({'opacity':'1'})
            }if(a>=150){
                $('.w1 .cont ul li').eq(0).css({'opacity':'1'})
                $('.w2 .cont ul li').eq(0).css({'opacity':'1'})
                $('.w3 .cont ul li').eq(0).css({'opacity':'1'})
                $('.w4 .cont ul li').eq(0).css({'opacity':'1'})
            }if(a>=750){
                $('.w1 .cont ul li').eq(1).css({'opacity':'1'})
                $('.w2 .cont ul li').eq(1).css({'opacity':'1'})
                $('.w3 .cont ul li').eq(1).css({'opacity':'1'})
                $('.w4 .cont ul li').eq(1).css({'opacity':'1'})
            }if(a>=1350){
                $('.w1 .cont ul li').eq(2).css({'opacity':'1'})
                $('.w2 .cont ul li').eq(2).css({'opacity':'1'})
                $('.w3 .cont ul li').eq(2).css({'opacity':'1'})
                $('.w4 .cont ul li').eq(2).css({'opacity':'1'})
            }if(a>=1920){
                $('.w1 .cont ul li').eq(3).css({'opacity':'1'})
                $('.w2 .cont ul li').eq(3).css({'opacity':'1'})
                $('.w3 .cont ul li').eq(3).css({'opacity':'1'})
                $('.w4 .cont ul li').eq(3).css({'opacity':'1'})
            }if(a>=2520){
                $('.w1 .cont ul li').eq(4).css({'opacity':'1'})
                $('.w2 .cont ul li').eq(4).css({'opacity':'1'})
                $('.w3 .cont ul li').eq(4).css({'opacity':'1'})
                $('.w4 .cont ul li').eq(4).css({'opacity':'1'})
            }if(a>=3120){
                $('.w1 .cont ul li:nth-child(n+6)').css({'opacity':'1'})
                $('.w2 .cont ul li:nth-child(n+6)').css({'opacity':'1'})
                $('.w3 .cont ul li:nth-child(n+6)').css({'opacity':'1'})
                $('.w4 .cont ul li:nth-child(n+6)').css({'opacity':'1'})
            }
        }
    });





    $('.w1 .more').click(function(){

       for(b=6; b<9; b++){
            $('.w1 .cont').find('li').eq(b).fadeIn(1000)
            $('.w1 .more').css({'display':'none'})
            $('.w1 .top').fadeIn(300).css({'display':'inline-block'})
        }
    });

    $('.w1 .top').click(function(){

        for(b=6; b<9; b++){
            $('.w1 .cont').find('li').eq(b).fadeOut(1000)
            $('.w1 .top').css({'display':'none'})
            $('.w1 .more').fadeIn(300).css({'display':'inline-block'})
        }
    });

    $('.w2 .more').click(function(){

        for(b=6; b<9; b++){
            $('.w2 .cont').find('li').eq(b).fadeIn(1000)
            $('.w2 .more').css({'display':'none'})
            $('.w2 .top').fadeIn(300).css({'display':'inline-block'})
        }
    });

    $('.w2 .top').click(function(){

        for(b=6; b<9; b++){
            $('.w2 .cont').find('li').eq(b).fadeOut(1000)
            $('.w2 .top').css({'display':'none'})
            $('.w2 .more').fadeIn(300).css({'display':'inline-block'})
        }
    });

});
