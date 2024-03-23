$(document).ready(function(){
    var a=$('.slider').width(),
        b=a/8,
        c=b*3.7,
        d=0,
        e=0,
        f=0,
        g=0,
        h=0,
        i=0,
        j=0;

        
    



    /*윈도우 사이즈 반응형 시 슬라이더 가운데 정렬*/
    $(window).resize(function(){
        a=$('.slider').width();
        b=a/8;
        c=b*3.7;
        d=c*-1;
        $('.slider').css({'left':d})

    })

    a=$('.slider').width();
    b=a/8;
    c=b*3.7;
    d=c*-1;

    $('.slider').css({'left':d})


    $('.sliderwrap').mouseover(function(){
        $('.slider-btn').css({'opacity':'1'})
    }).mouseout(function(){
        $('.slider-btn').css({'opacity':'0'})
    });
    $('.slider-btn').mouseover(function(){
        $('.slider-btn').css({'opacity':'1'})
    }).mouseout(function(){
        $('.slider-btn').css({'opacity':'0'})
    });

    $('.slider-btn ul li').eq(1).click(function(){

        e++
        
        $('.slider div').eq(0).appendTo('.slider')
        
        f=d+(b*e)
        $('.slider').css({'left':f})
        
        g=b*e*-1
        $('.slider').animate({'marginLeft':g})
    });

    
    $('.slider-btn ul li').eq(0).click(function(){

        e--

        f=d+(b*e)
        $('.slider').css({'left':f})
        $('.slider div').eq(7).prependTo('.slider')

        g=b*e*-1
        $('.slider').animate({'marginLeft':g})
    });




    $('.slider-btn ul li').click(function(){
    
        h=$('.slider div').eq(4).hasClass('i2')

        if(h==true){
            $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
        }else{

            h=$('.slider div').eq(4).hasClass('i3')

            if(h==true){
                $('.slider-btn-bottom ul li').eq(2).addClass('on').siblings().removeClass('on')
            }else{

                h=$('.slider div').eq(4).hasClass('i4')

                if(h==true){
                    $('.slider-btn-bottom ul li').eq(3).addClass('on').siblings().removeClass('on')
                }else{
                    $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')       
                }
            } 
        }
    });




    $('.slider-btn-bottom ul li').eq(0).click(function(){

        i=$('.slider-btn-bottom ul li').eq(1).hasClass('on')

        if(i==true){

            $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
            
            e=0
            j=d+(b*e)*-1
            $('.slider').css({'left':j})
            $('.slider div').eq(7).prependTo('.slider')
            
            l=b*e*-1
            $('.slider').animate({'marginLeft':l})
        }else{

            i=$('.slider-btn-bottom ul li').eq(2).hasClass('on')

            if(i==true){

                $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                
                e=0
                j=d+(b*e)*-1
                $('.slider').css({'left':j})
                $('.slider div').eq(7).prependTo('.slider')
                $('.slider div').eq(7).prependTo('.slider')
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(0).addClass('on').siblings().removeClass('on')
                    
                    e=0
                    j=d+(b*e)*-1
                    $('.slider').css({'left':j})
                    $('.slider div').eq(7).prependTo('.slider')
                    $('.slider div').eq(7).prependTo('.slider')
                    $('.slider div').eq(7).prependTo('.slider')
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
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
                $('.slider div').eq(7).prependTo('.slider')
                
                l=b*e*-1
                $('.slider').animate({'marginLeft':l})
            }else{

                i=$('.slider-btn-bottom ul li').eq(3).hasClass('on')

                if(i==true){

                    $('.slider-btn-bottom ul li').eq(1).addClass('on').siblings().removeClass('on')
                    
                    e=1
                    j=d+(b*e)
                    $('.slider').css({'left':j})
                    $('.slider div').eq(7).prependTo('.slider')
                    $('.slider div').eq(7).prependTo('.slider')
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
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
                    $('.slider div').eq(7).prependTo('.slider')
                    
                    l=b*e*-1
                    $('.slider').animate({'marginLeft':l})
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
                }
            }
        }
    });


});