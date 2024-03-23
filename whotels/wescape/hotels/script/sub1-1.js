$(document).ready(function(){


    var a=0;
    $('#title .titlewrap .menu').click(function(){

        a++
        a=a%2
        if(a==1){
            $('#title .titlewrap .submenu').stop().slideDown().css({'display':'flex'})
            $('.up').css({'display':'block'})
            $('.down').css({'display':'none'})
        }else{
            $('#title .titlewrap .submenu').stop().slideUp(300)
            $('.down').css({'display':'block'})
            $('.up').css({'display':'none'})
        }
    });



    $('.submenu li').click(menu);
    let submenu = 0

    function menu(){
        a=0;
        submenu = $(this).index()+1;
        $('.menu li').eq(submenu-1).addClass('on').siblings().removeClass('on')
        $('.submenu').stop().slideUp(300).css({'display':'flex'})
        $('.cont.c'+submenu).fadeIn(300).siblings().fadeOut(100)
        $('.link li').eq(submenu).show().siblings().hide()
        $('.link li').eq(0).show()
        $('.down').css({'display':'block'})
        $('.up').css({'display':'none'})
    }



    $('.c1 .mainslider-btn ul li').click(mainslider1);
    
    let mslider1 = 0
 
    function mainslider1(){
        mslider1 = $(this).index()+1;
        let url = 'url(img/aspen/slider0'+mslider1+'.jpg)';
        $('.c1 .mainslider').css({'backgroundImage':url});
        $('.c1 .mainslider-btn ul li').eq(mslider1-1).addClass('on').siblings().removeClass('on');
    }



    $('.c2 .mainslider-btn ul li').click(mainslider2);
    
    let mslider2 = 0
 
    function mainslider2(){
        mslider2 = $(this).index()+1;
        let url = 'url(img/costanavarino/slider0'+mslider2+'.jpg)';
        $('.c2 .mainslider').css({'backgroundImage':url});
        $('.c2 .mainslider-btn ul li').eq(mslider2-1).addClass('on').siblings().removeClass('on');
    }



    $('#main-cont .c1 .slider-btn ul li').click(slider1);
    
    let btn = 0
 
    function slider1(){
        btn = $(this).index()+1;
        $('.c1 .s'+btn).fadeIn(400).css({'display':'flex'}).siblings().fadeOut(400)
        $('.c1 .slider-btn ul li').eq(btn-1).addClass('on').siblings().removeClass('on');
    }



    $('#main-cont .c2 .slider-btn ul li').click(slider2);
    
    let btnn = 0
 
    function slider2(){
        btnn = $(this).index()+1;
        $('.c2 .s'+btnn).fadeIn(400).css({'display':'flex'}).siblings().fadeOut(400)
        $('.c2 .slider-btn ul li').eq(btnn-1).addClass('on').siblings().removeClass('on');
    }



    $('#sub-cont .c1 .slider-btn ul li').eq(0).click(function(){
        $('#sub-cont .c1 .slider').animate({'marginLeft':'0'})
        $('#sub-cont .c1 .slider-btn ul li').eq(0).addClass('on').siblings().removeClass('on')
    });
    $('#sub-cont .c1 .slider-btn ul li').eq(1).click(function(){
        a=$('#sub-cont .c1 .sliderwrap .slider').width();

        $('#sub-cont .c1 .slider').animate({'marginLeft':-a/2})
        $('#sub-cont .c1 .slider-btn ul li').eq(1).addClass('on').siblings().removeClass('on')
    });
    $('#sub-cont .c2 .slider-btn ul li').eq(0).click(function(){
        $('#sub-cont .c2 .slider').animate({'marginLeft':'0'})
        $('#sub-cont .c2 .slider-btn ul li').eq(0).addClass('on').siblings().removeClass('on')
    });
    $('#sub-cont .c2 .slider-btn ul li').eq(1).click(function(){
        a=$('#sub-cont .c2 .sliderwrap .slider').width();

        $('#sub-cont .c2 .slider').animate({'marginLeft':-a/2})
        $('#sub-cont .c2 .slider-btn ul li').eq(1).addClass('on').siblings().removeClass('on')
    });




    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>=200){
                $('#title').css({'opacity':'1'})
            }if(a>=300){
                $('#main-cont .cont p:nth-child(2n+1)').css({'opacity':'1'})
            }if(a>=500){
                $('#main-cont .cont .mainslider').css({'opacity':'1'})
                $('#main-cont .cont .mainslider-btn ul').css({'opacity':'1'})
            }if(a>=1400){
                $('#main-cont .cont .sliderwrap').css({'opacity':'1'})
                $('#main-cont .cont .slider-btn ul').css({'opacity':'1'})
            }if(a>=1700){
                $('#main-cont .cont p:nth-child(2n+2)').css({'opacity':'1'})
            }if(a>=2000){
                $('#sub-cont h2').css({'opacity':'1'})
            }if(a>=2200){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(n+1)').css({'opacity':'1'})
                $('#sub-cont .slider-btn ul').css({'opacity':'1'})
            }
        }else if(b>1280){
            if(a>=50){
                $('#title').css({'opacity':'1'})
            }if(a>=200){
                $('#main-cont .cont p:nth-child(2n+1)').css({'opacity':'1'})
            }if(a>=500){
                $('#main-cont .cont .mainslider').css({'opacity':'1'})
                $('#main-cont .cont .mainslider-btn ul').css({'opacity':'1'})
            }if(a>=1100){
                $('#main-cont .cont .sliderwrap').css({'opacity':'1'})
                $('#main-cont .cont .slider-btn ul').css({'opacity':'1'})
            }if(a>=1400){
                $('#main-cont .cont p:nth-child(2n+2)').css({'opacity':'1'})
            }if(a>=1600){
                $('#sub-cont h2').css({'opacity':'1'})
            }if(a>=1800){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(n+1)').css({'opacity':'1'})
                $('#sub-cont .slider-btn ul').css({'opacity':'1'})
            }
        }else if(b>1024){

            if(a>=50){
                $('#title').css({'opacity':'1'})
            }if(a>=150){
                $('#main-cont .cont p:nth-child(2n+1)').css({'opacity':'1'})
            }if(a>=400){
                $('#main-cont .cont .mainslider').css({'opacity':'1'})
                $('#main-cont .cont .mainslider-btn ul').css({'opacity':'1'})
            }if(a>=900){
                $('#main-cont .cont .sliderwrap').css({'opacity':'1'})
                $('#main-cont .cont .slider-btn ul').css({'opacity':'1'})
            }if(a>=1150){
                $('#main-cont .cont p:nth-child(2n+2)').css({'opacity':'1'})
            }if(a>=1400){
                $('#sub-cont h2').css({'opacity':'1'})
            }if(a>=1550){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(n+1)').css({'opacity':'1'})
                $('#sub-cont .slider-btn ul').css({'opacity':'1'})
            }
        }else if(b>800){

            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=50){
                $('#main-cont .cont p:nth-child(2n+1)').css({'opacity':'1'})
            }if(a>=200){
                $('#main-cont .cont .mainslider').css({'opacity':'1'})
                $('#main-cont .cont .mainslider-btn ul').css({'opacity':'1'})
            }if(a>=650){
                $('#main-cont .cont .sliderwrap').css({'opacity':'1'})
                $('#main-cont .cont .slider-btn ul').css({'opacity':'1'})
            }if(a>=850){
                $('#main-cont .cont p:nth-child(2n+2)').css({'opacity':'1'})
            }if(a>=1100){
                $('#sub-cont h2').css({'opacity':'1'})
            }if(a>=1300){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(n+1)').css({'opacity':'1'})
                $('#sub-cont .slider-btn ul').css({'opacity':'1'})
            }
        }else if(b>640){

            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=50){
                $('#main-cont .cont p:nth-child(2n+1)').css({'opacity':'1'})
            }if(a>=150){
                $('#main-cont .cont .mainslider').css({'opacity':'1'})
                $('#main-cont .cont .mainslider-btn ul').css({'opacity':'1'})
            }if(a>=400){
                $('#main-cont .cont .sliderwrap').css({'opacity':'1'})
                $('#main-cont .cont .slider-btn ul').css({'opacity':'1'})
            }if(a>=600){
                $('#main-cont .cont p:nth-child(2n+2)').css({'opacity':'1'})
            }if(a>=800){
                $('#sub-cont h2').css({'opacity':'1'})
            }if(a>=1000){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(n+1)').css({'opacity':'1'})
                $('#sub-cont .slider-btn ul').css({'opacity':'1'})
            }
        }else{

            if(a>=10){
                $('#title').css({'opacity':'1'})
            }if(a>=50){
                $('#main-cont .cont p:nth-child(2n+1)').css({'opacity':'1'})
            }if(a>=120){
                $('#main-cont .cont .mainslider').css({'opacity':'1'})
                $('#main-cont .cont .mainslider-btn ul').css({'opacity':'1'})
            }if(a>=250){
                $('#main-cont .cont .sliderwrap').css({'opacity':'1'})
                $('#main-cont .cont .slider-btn ul').css({'opacity':'1'})
            }if(a>=400){
                $('#main-cont .cont p:nth-child(2n+2)').css({'opacity':'1'})
            }if(a>=700){
                $('#sub-cont h2').css({'opacity':'1'})
            }if(a>=850){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(4n+1)').css({'opacity':'1'})
            }if(a>=1300){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(4n+2)').css({'opacity':'1'})
            }if(a>=1750){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(4n+3)').css({'opacity':'1'})
            }if(a>=2200){
                $('#sub-cont .cont .sliderwrap .slider ul li:nth-child(4n+4)').css({'opacity':'1'})
            }
        }
    });
});
