$(document).ready(function(){
    var a=$('.slider').width(),
        b=a/12,
        c=b*6.02,
        d=c*-1,
        e=0,
        f=0,
        g=0,
        h=0,
        i=0,
        j=0;



    $('.slider').css({'left':d})
   

    $(window).resize(function(){
        a=$('.slider').width(),
        b=a/12,
        c=b*6.02,
        d=c*-1

        $('.slider').css({'left':d})
    })

    
    $('.slider-btn ul li').eq(1).click(function(){

        e++
        
        f=d+(b*e)
        $('.slider').css({'left':f})
        $('.slider div').eq(0).appendTo('.slider')
        
        g=b*e*-1
        $('.slider').animate({'marginLeft':g})
    });

    
    $('.slider-btn ul li').eq(0).click(function(){

        e--

        f=d+(b*e)
        $('.slider').css({'left':f})
        $('.slider div').eq(11).prependTo('.slider')

        g=b*e*-1
        $('.slider').animate({'marginLeft':g})
    });




    $('.slider-btn ul li').click(function(){
    
        h=$('.slider div').eq(6).hasClass('i2')

        if(h==true){
            $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
        }else{

            h=$('.slider div').eq(6).hasClass('i3')

            if(h==true){
                $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
            }else{

                h=$('.slider div').eq(6).hasClass('i4')

                if(h==true){
                    $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
                }else{
                    
                    h=$('.slider div').eq(6).hasClass('i5')

                    if(h==true){
                        $('.slider-btn-bottom ul li').eq(4).addClass('on').siblings().removeClass('on')
                    }else{
                    
                        h=$('.slider div').eq(6).hasClass('i6')
                        
                        if(h==true){
                            $('.slider-btn-bottom ul li').eq(5).addClass('on').siblings().removeClass('on')
                        }else{
                            $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                        }
                    }
                }
            } 
        }
    });




    $('.slider-btn-bottom ul li').eq(0).click(function(){

        i=$('.slider-btn-bottom ul li').eq(1).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
            
            e=0
            j=(d+(b*e))
            $('.slider').css({'left':j})
            $('.slider div').eq(11).prependTo('.slider')
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(2).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                
                e=0
                j=(d+(b*e))
                $('.slider').css({'left':j})
                $('.slider div').eq(11).prependTo('.slider')
                $('.slider div').eq(11).prependTo('.slider')
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                    
                    e=0
                    j=(d+(b*e))
                    $('.slider').css({'left':j})
                    $('.slider div').eq(11).prependTo('.slider')
                    $('.slider div').eq(11).prependTo('.slider')
                    $('.slider div').eq(11).prependTo('.slider')
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
                }else{

                    i=$('.slider-btn-bottom ul li').eq(4).hasClass('on')
    
                    if(i==true){
    
                        $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                        
                        e=0
                        j=(d+(b*e))
                        $('.slider').css({'left':j})
                        $('.slider div').eq(11).prependTo('.slider')
                        $('.slider div').eq(11).prependTo('.slider')
                        $('.slider div').eq(11).prependTo('.slider')
                        $('.slider div').eq(11).prependTo('.slider')
                        
                        l=b*e*-1
                        $('.slider').animate({'marginLeft':l})
                    }else{

                        i=$('.slider-btn-bottom ul li').eq(5).hasClass('on')
        
                        if(i==true){
        
                            $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                            
                            e=0
                            j=(d+(b*e))
                            $('.slider').css({'left':j})
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            
                            l=b*e*-1
                            $('.slider').animate({'marginLeft':l})
                        }
                    }
                }
            }
        }
    });





    $('.slider-btn-bottom ul li').eq(1).click(function(){

        i=$('.slider-btn-bottom ul li').eq(0).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
            
            e=1
            $('.slider div').eq(0).appendTo('.slider')

            j=d+(b*e)
            $('.slider').css({'left':j})
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(2).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
                
                e=1
                j=d+(b*e)
                $('.slider').css({'left':j})
                $('.slider div').eq(11).prependTo('.slider')
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
                    
                    e=1
                    j=d+(b*e)
                    $('.slider').css({'left':j})
                    $('.slider div').eq(11).prependTo('.slider')
                    $('.slider div').eq(11).prependTo('.slider')
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
                }else{

                    i=$('.slider-btn-bottom ul li').eq(4).hasClass('on')
    
                    if(i==true){
    
                        $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
                        
                        e=1
                        j=d+(b*e)
                        $('.slider').css({'left':j})
                        $('.slider div').eq(11).prependTo('.slider')
                        $('.slider div').eq(11).prependTo('.slider')
                        $('.slider div').eq(11).prependTo('.slider')
                        
                        l=b*e*-1
                        $('.slider').animate({'marginLeft':l})
                    }else{

                        i=$('.slider-btn-bottom ul li').eq(5).hasClass('on')
        
                        if(i==true){
        
                            $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
                            
                            e=1
                            j=d+(b*e)
                            $('.slider').css({'left':j})
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            
                            l=b*e*-1
                            $('.slider').animate({'marginLeft':l})
                        }
                    }
                }
            }
        }
    });





    $('.slider-btn-bottom ul li').eq(2).click(function(){

        i=$('.slider-btn-bottom ul li').eq(0).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
            
            e=2
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')

            j=d+(b*e)
            $('.slider').css({'left':j})
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(1).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
                
                e=2
                $('.slider div').eq(0).appendTo('.slider')

                j=d+(b*e)
                $('.slider').css({'left':j})
                
                l=b*e*-1
            $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
                    
                    e=2
                    j=d+(b*e)
                    $('.slider').css({'left':j})
                    $('.slider div').eq(11).prependTo('.slider')
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
                }else{

                    i=$('.slider-btn-bottom ul li').eq(4).hasClass('on')
    
                    if(i==true){
    
                        $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
                        
                        e=2
                        j=d+(b*e)
                        $('.slider').css({'left':j})
                        $('.slider div').eq(11).prependTo('.slider')
                        $('.slider div').eq(11).prependTo('.slider')
                        
                        l=b*e*-1
                        $('.slider').animate({'marginLeft':l})
                    }else{

                        i=$('.slider-btn-bottom ul li').eq(5).hasClass('on')
        
                        if(i==true){
        
                            $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
                            
                            e=2
                            j=d+(b*e)
                            $('.slider').css({'left':j})
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                            
                            l=b*e*-1
                            $('.slider').animate({'marginLeft':l})
                        }
                    }
                }
            }
        }
    });





    $('.slider-btn-bottom ul li').eq(3).click(function(){

        i=$('.slider-btn-bottom ul li').eq(0).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
            
            e=3
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')

            j=d+(b*e)
            $('.slider').css({'left':j})
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(1).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
                
                e=3
                $('.slider div').eq(0).appendTo('.slider')
                $('.slider div').eq(0).appendTo('.slider')

                j=d+(b*e)
                $('.slider').css({'left':j})
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(2).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
                    
                    e=3
                    $('.slider div').eq(0).appendTo('.slider')

                    j=d+(b*e)
                    $('.slider').css({'left':j})
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
                }else{

                    i=$('.slider-btn-bottom ul li').eq(4).hasClass('on')
    
                    if(i==true){
    
                        $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
                        
                        e=3
                        j=d+(b*e)
                        $('.slider').css({'left':j})
                        $('.slider div').eq(11).prependTo('.slider')
                            
                        l=b*e*-1
                        $('.slider').animate({'marginLeft':l})
                    }else{

                        i=$('.slider-btn-bottom ul li').eq(5).hasClass('on')
        
                        if(i==true){
        
                            $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
                            
                            e=3
                            j=d+(b*e)
                            $('.slider').css({'left':j})
                            $('.slider div').eq(11).prependTo('.slider')
                            $('.slider div').eq(11).prependTo('.slider')
                                
                            l=b*e*-1
                            $('.slider').animate({'marginLeft':l})
                        }
                    }
                }
            }
        }
    });





    $('.slider-btn-bottom ul li').eq(4).click(function(){

        i=$('.slider-btn-bottom ul li').eq(0).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(4).addClass('on').siblings().removeClass('on')
            
            e=4
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')

            j=d+(b*e)
            $('.slider').css({'left':j})
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(1).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(4).addClass('on').siblings().removeClass('on')
                
                e=4
                $('.slider div').eq(0).appendTo('.slider')
                $('.slider div').eq(0).appendTo('.slider')
                $('.slider div').eq(0).appendTo('.slider')

                j=d+(b*e)
                $('.slider').css({'left':j})
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(2).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(4).addClass('on').siblings().removeClass('on')
                    
                    e=4
                    $('.slider div').eq(0).appendTo('.slider')
                    $('.slider div').eq(0).appendTo('.slider')

                    j=d+(b*e)
                    $('.slider').css({'left':j})
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
                }else{

                    i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')
    
                    if(i==true){
    
                        $('.slider-btn-bottom ul li').eq(4).addClass('on').siblings().removeClass('on')
                        
                        e=4
                        $('.slider div').eq(0).appendTo('.slider')
    
                        j=d+(b*e)
                        $('.slider').css({'left':j})
                        
                        l=b*e*-1
                        $('.slider').animate({'marginLeft':l})
                    }else{

                        i=$('.slider-btn-bottom ul li').eq(5).hasClass('on')
        
                        if(i==true){
        
                            $('.slider-btn-bottom ul li').eq(4).addClass('on').siblings().removeClass('on')
                            
                            e=4
                            j=d+(b*e)
                            $('.slider').css({'left':j})
                            $('.slider div').eq(11).prependTo('.slider')
                                
                            l=b*e*-1
                            $('.slider').animate({'marginLeft':l})
                        }
                    }
                }
            }
        }
    });





    $('.slider-btn-bottom ul li').eq(5).click(function(){

        i=$('.slider-btn-bottom ul li').eq(0).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(5).addClass('on').siblings().removeClass('on')
            
            e=5
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')
            $('.slider div').eq(0).appendTo('.slider')

            j=d+(b*e)
            $('.slider').css({'left':j})
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(1).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(5).addClass('on').siblings().removeClass('on')
                
                e=5
                $('.slider div').eq(0).appendTo('.slider')
                $('.slider div').eq(0).appendTo('.slider')
                $('.slider div').eq(0).appendTo('.slider')
                $('.slider div').eq(0).appendTo('.slider')

                j=d+(b*e)
                $('.slider').css({'left':j})
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(2).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(5).addClass('on').siblings().removeClass('on')
                    
                    e=5
                    $('.slider div').eq(0).appendTo('.slider')
                    $('.slider div').eq(0).appendTo('.slider')
                    $('.slider div').eq(0).appendTo('.slider')

                    j=d+(b*e)
                    $('.slider').css({'left':j})
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
                }else{

                    i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')
    
                    if(i==true){
    
                        $('.slider-btn-bottom ul li').eq(5).addClass('on').siblings().removeClass('on')
                        
                        e=5
                        $('.slider div').eq(0).appendTo('.slider')
                        $('.slider div').eq(0).appendTo('.slider')
    
                        j=d+(b*e)
                        $('.slider').css({'left':j})
                        
                        l=b*e*-1
                        $('.slider').animate({'marginLeft':l})
                    }else{

                        i=$('.slider-btn-bottom ul li').eq(4).hasClass('on')
        
                        if(i==true){
        
                            $('.slider-btn-bottom ul li').eq(5).addClass('on').siblings().removeClass('on')
                            
                            e=5
                            $('.slider div').eq(0).appendTo('.slider')
        
                            j=d+(b*e)
                            $('.slider').css({'left':j})
                            
                            l=b*e*-1
                            $('.slider').animate({'marginLeft':l})
                        }
                    }
                }
            }
        }
    });




    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('#main-ad').css({'marginTop':'0','opacity':'1'})
    });



    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1280){
            if(a>=500){
                $('#main-cont .cont ul li:nth-child(n+1)').css({'marginTop':'0','opacity':'1'})
            }if(a>=1200){
                for(c=0; c<=9; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1500){
                for(c=10; c<=17; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>1024){
            if(a>=500){
                $('#main-cont .cont ul li').eq(0).css({'marginTop':'0','opacity':'1'})
            }if(a>=1200){
                $('#main-cont .cont ul li').eq(1).css({'marginTop':'0','opacity':'1'})
            }if(a>=1300){
                $('#main-cont .cont ul li').eq(2).css({'marginTop':'0','opacity':'1'})
            }if(a>=1600){
                for(c=0; c<=9; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1900){
                for(c=10; c<=17; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>800){
            if(a>=200){
                $('#main-cont .cont ul li').eq(0).css({'marginTop':'0','opacity':'1'})
            }if(a>=700){
                $('#main-cont .cont ul li').eq(1).css({'marginTop':'0','opacity':'1'})
            }if(a>=800){
                $('#main-cont .cont ul li').eq(2).css({'marginTop':'0','opacity':'1'})
            }if(a>=1100){
                for(c=0; c<=9; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1400){
                for(c=10; c<=17; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else if(b>490){
            if(a>=10){
                $('#main-cont .cont ul li').eq(0).css({'marginTop':'0','opacity':'1'})
            }if(a>=300){
                $('#main-cont .cont ul li').eq(1).css({'marginTop':'0','opacity':'1'})
            }if(a>=400){
                $('#main-cont .cont ul li').eq(2).css({'marginTop':'0','opacity':'1'})
            }if(a>=700){
                for(c=0; c<=9; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=900){
                for(c=10; c<=17; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }
        }else{
            if(a>=10){
                $('#main-cont .cont ul li').eq(0).css({'marginTop':'0','opacity':'1'})
            }if(a>=200){
                $('#main-cont .cont ul li').eq(1).css({'marginTop':'0','opacity':'1'})
            }if(a>=400){
                $('#main-cont .cont ul li').eq(2).css({'marginTop':'0','opacity':'1'})
            }if(a>=700){
                for(c=0; c<=1; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=950){
                for(c=2; c<=3; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1200){
                for(c=4; c<=5; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1450){
                for(c=6; c<=7; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1700){
                for(c=8; c<=9; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=1950){
                for(c=10; c<=11; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=2200){
                for(c=12; c<=13; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=2500){
                $('#sub-cont .contwrap ul li').eq(14).css({'marginTop':'0','opacity':'1'})
            }if(a>=2850){
                for(c=15; c<=16; c++){
                    $('#sub-cont .contwrap ul li').eq(c).css({'marginTop':'0','opacity':'1'})
                }
            }if(a>=3100){
                $('#sub-cont .contwrap ul li').eq(17).css({'marginTop':'0','opacity':'1'})
            }
        }
        
    });




/*
    let scr = 0;
    let aaa=0;
    $('#sub-cont .contwrap').on("wheel", function (event){
        // deltaY obviously records vertical scroll
        
        // event.originalEvent → JavaScript 의 wheelEvent 객체
        // deltaY 값은 개인이 마우스 설정에서 설정한 휠 설정 값에 따라 다르다.
        console.log(event.originalEvent.deltaY);
      

        if (event.originalEvent.deltaY < 0) {
            //위로
            scr-=10;
        }
        else {
            //아래로
            scr+=10;
        }
        $(".contwrap").scrollLeft(scr);
        //$(document).scrollTop(aaa);
       // console.log(aaa);
      });
    
    //   $(document).on("scroll",function(e){
    //     e.preventDefault();
    // console.log("aaa");
    // e.stopPropagation();
    //     return false;
    // });


      $('#sub-cont .contwrap').on("mouseenter",function(){
      
       // aaa=$(window).scrollTop();
        console.log("aaa");

      });*/
});