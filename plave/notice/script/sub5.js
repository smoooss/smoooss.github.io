$(document).ready(function(){


    a=$(window).width()

    if(a>=500){

        $('#main .contentwrap ul li').click(cont1);

        let index = 0
    
        function cont1(){
            index = $(this).index()+1;

            $('html,body').animate({scrollTop:index*89.5-80},500)

            a=$(this).find('.more').hasClass('on')
            
            if(a==false){
                $('#main .contentwrap ul li .more').slideUp()
                $(this).find('.more').slideDown()
                $('#main .contentwrap ul li .more').removeClass('on')
                $(this).find('.more').addClass('on')
            }else{
                $(this).find('.more').slideUp()
                $(this).find('.more').removeClass('on')
            }
        }

    }else{

        $('#main .contentwrap ul li').click(cont2);
    
        function cont2(){

            a=$(this).find('.more').hasClass('on')
            b=$(window).scrollTop()

            if(a==false){
                $(this).find('.more').slideDown()
                $(this).find('.more').addClass('on')
                $('html,body').animate({scrollTop:b})
            }else{
                $(this).find('.more').slideUp()
                $(this).find('.more').removeClass('on')
            }
        }
    }





    $(window).on('scroll touchmove mousewheel',function(){

        e=$(window).scrollTop()
        d=$(window).width()

        if(d<500){
            if(e>10){
                for(c=10; c<20; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>200){
                for(c=20; c<30; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>600){
                for(c=30; c<40; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>1000){
                for(c=40; c<50; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>1400){
                for(c=50; c<60; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>1800){
                for(c=60; c<70; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>2200){
                for(c=70; c<80; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>2600){
                for(c=80; c<90; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>3000){
                for(c=90; c<100; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>3400){
                for(c=100; c<110; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>3800){
                for(c=110; c<120; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>4200){
                for(c=120; c<130; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }if(e>4600){
                for(c=130; c<140; c++){
                    $('#main .contentwrap ul li').eq(c).fadeIn(500)
                }
            }
        }else{
            $('#main .contentwrap ul li').fadeIn(500)
        }
    });

});
