$(document).ready(function(){



    /* menu */
    $('.menu ul li').click(menu);
    let idx = 0

    function menu(){
        idx = $(this).index()+1;
        $('.contentwrap').fadeOut(0)
        $('.contentwrap.w'+idx).fadeIn(300)
        $('.menu ul li').eq(idx-1).addClass('on').siblings().removeClass('on')
        $('.sliderwrap').css({'marginLeft':0})
        $('.slider-btn ul li:nth-child(4n+1)').addClass('on').siblings().removeClass('on')
        if(idx==4){
            idx = 0;
        }
    }



    /* w1 slider */
    $('.w1 .c1 .slider-btn ul li').click(slider_1);
    let slider1 = 0

    function slider_1(){
        a=$('#main-cont .w1 .sliderwrap .slider').width();
        slider1 = $(this).index();
        $('.w1 .c1 .sliderwrap').animate({'marginLeft':slider1*-a},700)
        $('.w1 .c1 .slider-btn ul li').eq(slider1).addClass('on').siblings().removeClass('on')
    }

    $('.w1 .c2 .slider-btn ul li').click(slider_2);
    let slider2 = 0

    function slider_2(){
        a=$('#main-cont .w1 .sliderwrap .slider').width();
        slider2 = $(this).index();
        $('.w1 .c2 .sliderwrap').animate({'marginLeft':slider2*-a},700)
        $('.w1 .c2 .slider-btn ul li').eq(slider2).addClass('on').siblings().removeClass('on')
    }

    $('.w1 .c3 .slider-btn ul li').click(slider_3);
    let slider3 = 0

    function slider_3(){
        a=$('#main-cont .w1 .sliderwrap .slider').width();
        slider3 = $(this).index();
        $('.w1 .c3 .sliderwrap').animate({'marginLeft':slider3*-a},700)
        $('.w1 .c3 .slider-btn ul li').eq(slider3).addClass('on').siblings().removeClass('on')
    }

    $('.w1 .c4 .slider-btn ul li').click(slider_4);
    let slider4 = 0

    function slider_4(){
        a=$('#main-cont .w1 .sliderwrap .slider').width();
        slider4 = $(this).index();
        $('.w1 .c4 .sliderwrap').animate({'marginLeft':slider4*-a},700)
        $('.w1 .c4 .slider-btn ul li').eq(slider4).addClass('on').siblings().removeClass('on')
    }




    /* w2 slider */
    $('.w2 .c1 .slider-btn ul li').click(slider_5);
    let slider5 = 0

    function slider_5(){
        a=$('#main-cont .w2 .sliderwrap .slider').width();
        slider5 = $(this).index();
        $('.w2 .c1 .sliderwrap').animate({'marginLeft':slider5*-a},700)
        $('.w2 .c1 .slider-btn ul li').eq(slider5).addClass('on').siblings().removeClass('on')
    }

    $('.w2 .c2 .slider-btn ul li').click(slider_6);
    let slider6 = 0

    function slider_6(){
        a=$('#main-cont .w2 .sliderwrap .slider').width();
        slider6 = $(this).index();
        $('.w2 .c2 .sliderwrap').animate({'marginLeft':slider6*-a},700)
        $('.w2 .c2 .slider-btn ul li').eq(slider6).addClass('on').siblings().removeClass('on')
    }

    $('.w2 .c3 .slider-btn ul li').click(slider_7);
    let slider7 = 0

    function slider_7(){
        a=$('#main-cont .w2 .sliderwrap .slider').width();
        slider7 = $(this).index();
        $('.w2 .c3 .sliderwrap').animate({'marginLeft':slider7*-a},700)
        $('.w2 .c3 .slider-btn ul li').eq(slider7).addClass('on').siblings().removeClass('on')
    }

    $('.w2 .c4 .slider-btn ul li').click(slider_8);
    let slider8 = 0

    function slider_8(){
        a=$('#main-cont .w2 .sliderwrap .slider').width();
        slider8 = $(this).index();
        $('.w2 .c4 .sliderwrap').animate({'marginLeft':slider8*-a},700)
        $('.w2 .c4 .slider-btn ul li').eq(slider8).addClass('on').siblings().removeClass('on')
    }




    /* w3 slider */
    $('.w3 .c1 .slider-btn ul li').click(slider_9);
    let slider9 = 0

    function slider_9(){
        a=$('#main-cont .w3 .sliderwrap .slider').width();
        slider9 = $(this).index();
        $('.w3 .c1 .sliderwrap').animate({'marginLeft':slider9*-a},700)
        $('.w3 .c1 .slider-btn ul li').eq(slider9).addClass('on').siblings().removeClass('on')
    }

    $('.w3 .c2 .slider-btn ul li').click(slider_10);
    let slider10 = 0

    function slider_10(){
        a=$('#main-cont .w3 .sliderwrap .slider').width();
        slider10 = $(this).index();
        $('.w3 .c2 .sliderwrap').animate({'marginLeft':slider10*-a},700)
        $('.w3 .c2 .slider-btn ul li').eq(slider10).addClass('on').siblings().removeClass('on')
    }

    $('.w3 .c3 .slider-btn ul li').click(slider_11);
    let slider11 = 0

    function slider_11(){
        a=$('#main-cont .w3 .sliderwrap .slider').width();
        slider11 = $(this).index();
        $('.w3 .c3 .sliderwrap').animate({'marginLeft':slider11*-a},700)
        $('.w3 .c3 .slider-btn ul li').eq(slider11).addClass('on').siblings().removeClass('on')
    }

    $('.w3 .c4 .slider-btn ul li').click(slider_12);
    let slider12 = 0

    function slider_12(){
        a=$('#main-cont .w3 .sliderwrap .slider').width();
        slider12 = $(this).index();
        $('.w3 .c4 .sliderwrap').animate({'marginLeft':slider12*-a},700)
        $('.w3 .c4 .slider-btn ul li').eq(slider12).addClass('on').siblings().removeClass('on')
    }




    /* w4 slider */
    $('.w4 .c1 .slider-btn ul li').click(slider_13);
    let slider13 = 0

    function slider_13(){
        a=$('#main-cont .w4 .sliderwrap .slider').width();
        slider13 = $(this).index();
        $('.w4 .c1 .sliderwrap').animate({'marginLeft':slider13*-a},700)
        $('.w4 .c1 .slider-btn ul li').eq(slider13).addClass('on').siblings().removeClass('on')
    }

    $('.w4 .c2 .slider-btn ul li').click(slider_14);
    let slider14 = 0

    function slider_14(){
        a=$('#main-cont .w4 .sliderwrap .slider').width();
        slider14 = $(this).index();
        $('.w4 .c2 .sliderwrap').animate({'marginLeft':slider14*-a},700)
        $('.w4 .c2 .slider-btn ul li').eq(slider14).addClass('on').siblings().removeClass('on')
    }

    $('.w4 .c3 .slider-btn ul li').click(slider_15);
    let slider15 = 0

    function slider_15(){
        a=$('#main-cont .w4 .sliderwrap .slider').width();
        slider15 = $(this).index();
        $('.w4 .c3 .sliderwrap').animate({'marginLeft':slider15*-a},700)
        $('.w4 .c3 .slider-btn ul li').eq(slider15).addClass('on').siblings().removeClass('on')
    }

    $('.w4 .c4 .slider-btn ul li').click(slider_16);
    let slider16 = 0

    function slider_16(){
        a=$('#main-cont .w4 .sliderwrap .slider').width();
        slider16 = $(this).index();
        $('.w4 .c4 .sliderwrap').animate({'marginLeft':slider16*-a},700)
        $('.w4 .c4 .slider-btn ul li').eq(slider16).addClass('on').siblings().removeClass('on')
    }


    $('#main-cont .cont ul').mouseover(function(){
        $(this).find('li').css({'backgroundSize':'110%'})
    }).mouseout(function(){
        $(this).find('li').css({'backgroundSize':'100%'})
    });





        a=$('#main-cont .w1 .slider ul .img').width();
        b=$('#main-cont .w2 .slider ul .img').width();
        c=$('#main-cont .w3 .slider ul .img').width();
        d=$('#main-cont .w4 .slider ul .img').width();
        e=(450*a)/670;
        f=(450*b)/670;
        g=(450*c)/670;
        h=(450*d)/670;
        i=$(window).width();
        
        if(i>1400){
            $('#main-cont .w1 .slider ul .discript').css({'height':'450px'})
            $('#main-cont .w2 .slider ul .discript').css({'height':'450px'})
            $('#main-cont .w3 .slider ul .discript').css({'height':'450px'})
            $('#main-cont .w4 .slider ul .discript').css({'height':'450px'})
        }if(i>640){
            $('#main-cont .w1 .slider ul .discript').css({'height':e})
            $('#main-cont .w2 .slider ul .discript').css({'height':f})
            $('#main-cont .w3 .slider ul .discript').css({'height':g})
            $('#main-cont .w4 .slider ul .discript').css({'height':h})
        }else{
            $('#main-cont .w1 .slider ul .img').css({'height':e})
            $('#main-cont .w2 .slider ul .img').css({'height':f})
            $('#main-cont .w3 .slider ul .img').css({'height':g})
            $('#main-cont .w4 .slider ul .img').css({'height':h})
            $('#main-cont .w1 .slider ul .discript').css({'height':'auto'})
            $('#main-cont .w2 .slider ul .discript').css({'height':'auto'})
            $('#main-cont .w3 .slider ul .discript').css({'height':'auto'})
            $('#main-cont .w4 .slider ul .discript').css({'height':'auto'})
        }





    $(window).on('scroll touchmove mousewheel, click, resize',function(){
        a=$('#main-cont .w1 .slider ul .img').width();
        b=$('#main-cont .w2 .slider ul .img').width();
        c=$('#main-cont .w3 .slider ul .img').width();
        d=$('#main-cont .w4 .slider ul .img').width();
        e=(450*a)/670;
        f=(450*b)/670;
        g=(450*c)/670;
        h=(450*d)/670;
        i=$(window).width();
        
        if(i>1400){
            $('#main-cont .w1 .slider ul .discript').css({'height':'450px'})
            $('#main-cont .w2 .slider ul .discript').css({'height':'450px'})
            $('#main-cont .w3 .slider ul .discript').css({'height':'450px'})
            $('#main-cont .w4 .slider ul .discript').css({'height':'450px'})
        }if(i>640){
            $('#main-cont .w1 .slider ul .img').css({'height':e})
            $('#main-cont .w2 .slider ul .img').css({'height':f})
            $('#main-cont .w3 .slider ul .img').css({'height':g})
            $('#main-cont .w4 .slider ul .img').css({'height':h})
            $('#main-cont .w1 .slider ul .discript').css({'height':e})
            $('#main-cont .w2 .slider ul .discript').css({'height':f})
            $('#main-cont .w3 .slider ul .discript').css({'height':g})
            $('#main-cont .w4 .slider ul .discript').css({'height':h})
        }else{
            $('#main-cont .w1 .slider ul .img').css({'height':e})
            $('#main-cont .w2 .slider ul .img').css({'height':f})
            $('#main-cont .w3 .slider ul .img').css({'height':g})
            $('#main-cont .w4 .slider ul .img').css({'height':h})
            $('#main-cont .w1 .slider ul .discript').css({'height':'auto'})
            $('#main-cont .w2 .slider ul .discript').css({'height':'auto'})
            $('#main-cont .w3 .slider ul .discript').css({'height':'auto'})
            $('#main-cont .w4 .slider ul .discript').css({'height':'auto'})
        }
    });





    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();
        
        if(b>1400){
            if(a>=300){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=1050){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=1800){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=2550){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }else if(b>1280){
            if(a>=200){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=900){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=1600){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=2300){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }else if(b>1024){
            if(a>=100){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=650){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=1200){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=1750){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }else if(b>800){
            if(a>=50){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=400){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=900){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=1400){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }else if(b>640){
            if(a>=50){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=250){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=650){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=1000){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }else if(b>500){
            if(a>=50){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=800){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=1650){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=2500){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }else{
            if(a>=50){
                $('.c1 h2').css({'opacity':'1'})
                $('.c1 .slider').css({'opacity':'1'})
                $('.c1 .slider-btn').css({'opacity':'1'})
            }if(a>=450){
                $('.c2 h2').css({'opacity':'1'})
                $('.c2 .slider').css({'opacity':'1'})
                $('.c2 .slider-btn').css({'opacity':'1'})
            }if(a>=1050){
                $('.c3 h2').css({'opacity':'1'})
                $('.c3 .slider').css({'opacity':'1'})
                $('.c3 .slider-btn').css({'opacity':'1'})
            }if(a>=1650){
                $('.c4 h2').css({'opacity':'1'})
                $('.c4 .slider').css({'opacity':'1'})
                $('.c4 .slider-btn').css({'opacity':'1'})
            }
        }
    });
});
