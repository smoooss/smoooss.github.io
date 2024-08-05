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

});
