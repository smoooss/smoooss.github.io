$(document).ready(function(){


    a=$('#sub-cont .cont ul li').width();
    b=$('#main-cont .cont ul li').width();
    c=(380*b)/600;
    f=$(window).width();
        
    $('#sub-cont .cont ul li').css({'height':a})
    $('#main-cont .cont ul li .img').css({'height':c})

    if(f<=1400){
        d=$('#main-ad .slider').width();
        e=(750*d)/1400;

        $('#main-ad .slider').css({'height':e})
        $('#main-ad .back').css({'transition':'0.5s','height':e})
        $('#main-ad .back a').css({'transition':'0.5s','height':e})
        $('#sub-ad').css({'height':e})
        $('#sub-ad .back').css({'height':e})
        $('#sub-ad .back a').css({'height':e})
        $('#sub-ad .sliderwrap .slider').css({'height':e})
    }if(f<=640){

        $('#main-ad .slider').css({'height':'350px'})
        $('#main-ad .back').css({'height':'350px'})
        $('#main-ad .back a').css({'height':'350px'})
        $('#sub-ad').css({'height':'320px'})
        $('#sub-ad .back').css({'height':'320px'})
        $('#sub-ad .back a').css({'height':'320px'})
        $('#sub-ad .sliderwrap .slider').css({'height':'320px'})
    }



    /* main slider */
    setInterval(slider1,5000);

    $('.slider-btn ul li').click(slider2);

    let idx = 0

    function slider1(){
        idx++;
        let url = 'url(img/main/slider0'+idx+'.jpg)';
        $('#main-ad .slider').css({'backgroundImage':url});
        $('.typog ul li').eq(idx-1).fadeIn(500).siblings().fadeOut(100);
        $('.slider-btn ul li').eq(idx-1).addClass('on').siblings().removeClass('on');
        if(idx==4){
           idx = 0;
       }
   }

    function slider2(){
        idx = $(this).index()+1;
        let url = 'url(img/main/slider0'+idx+'.jpg)';
        $('#main-ad .slider').css({'backgroundImage':url});
        $('.typog ul li').eq(idx-1).fadeIn(500).siblings().fadeOut(100);
        $('.slider-btn ul li').eq(idx-1).addClass('on').siblings().removeClass('on');
        if(idx==4){
            idx = 0;
        }
    }


    let crruntIndex = 0;
    $("#sub-ad .sliderwrap").append($('.s1').clone(true));

    setInterval(function(){
        a=$('#sub-ad .back').height();

        crruntIndex++;
        $("#sub-ad .sliderwrap").animate({marginTop: -crruntIndex * a +"px"}, 2000);

        if(crruntIndex==2){
            setTimeout(function(){
                $("#sub-ad .sliderwrap").animate({marginTop:0},0);
                crruntIndex = 0;
            },1000);
        }
    },5000);




    /* main ad */
    $(window).on('resize',function(){
        a=$('#sub-cont .cont ul li').width();
        b=$('#main-cont .cont ul li').width();
        c=(380*b)/600;
        f=$(window).width();
            
        $('#sub-cont .cont ul li').css({'height':a})
        $('#main-cont .cont ul li .img').css({'height':c})

        if(f<=1400){
            d=$('#main-ad .slider').width();
            e=(750*d)/1400;

            $('#main-ad .slider').css({'height':e})
            $('#main-ad .back').css({'transition':'0.5s','height':e})
            $('#main-ad .back a').css({'transition':'0.5s','height':e})
            $('#sub-ad').css({'height':e})
            $('#sub-ad .back').css({'height':e})
            $('#sub-ad .back a').css({'height':e})
            $('#sub-ad .sliderwrap .slider').css({'height':e})
        }if(f<=640){

            $('#main-ad .slider').css({'height':'350px'})
            $('#main-ad .back').css({'height':'350px'})
            $('#main-ad .back a').css({'height':'350px'})
            $('#sub-ad').css({'height':'320px'})
            $('#sub-ad .back').css({'height':'320px'})
            $('#sub-ad .back a').css({'height':'320px'})
            $('#sub-ad .sliderwrap .slider').css({'height':'320px'})
        }
    });



    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

    if(b>1280){
        if(a>=300){
            for(c=0; c<=1; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=900){
            for(c=2; c<=3; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=2400){
            for(c=0; c<=4; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=2600){
            for(c=5; c<=9; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }
    }else if(b>1024){
        if(a>=200){
            for(c=0; c<=1; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=600){
            for(c=2; c<=3; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=1900){
            for(c=0; c<=4; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=2050){
            for(c=5; c<=9; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }
    }else if(b>800){
        if(a>=100){
            for(c=0; c<=1; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=400){
            for(c=2; c<=3; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=1400){
            for(c=0; c<=4; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=1500){
            for(c=5; c<=9; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }
    }else if(b>640){
        if(a>=50){
            for(c=0; c<=1; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=250){
            for(c=2; c<=3; c++){
                $('#main-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=1100){
            for(c=0; c<=4; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=1200){
            for(c=5; c<=9; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }
    }else{
        if(a>=10){
            $('#main-cont .cont ul li').eq(0).css({'opacity':'1'})
        }if(a>=350){
            $('#main-cont .cont ul li').eq(1).css({'opacity':'1'})
        }if(a>=850){
            $('#main-cont .cont ul li').eq(2).css({'opacity':'1'})
        }if(a>=1300){
            $('#main-cont .cont ul li').eq(3).css({'opacity':'1'})
        }if(a>=2200){
            for(c=0; c<=1; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=2400){
            for(c=2; c<=3; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=2600){
            for(c=4; c<=5; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=2800){
            for(c=6; c<=7; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }if(a>=3000){
            for(c=8; c<=9; c++){
                $('#sub-cont .cont ul li').eq(c).css({'opacity':'1'})
            }
        }
    }
});    

    

        

    $('#main-cont .cont ul li').mouseover(function(){
        $(this).find('.img').css({'backgroundSize':'110%'})
    }).mouseout(function(){
        $(this).find('.img').css({'backgroundSize':'100%'})
    });



    
    $('#sub-cont .cont ul li').mouseover(function(){
        $(this).css({'backgroundSize':'110%'})
    }).mouseout(function(){
        $(this).css({'backgroundSize':'100%'})
    });

});
