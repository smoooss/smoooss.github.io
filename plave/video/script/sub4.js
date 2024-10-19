$(document).ready(function(){

    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });


    $('main .container .menu ul li').click(menu);

    let index = 0

    function menu(){
        index = $(this).index()+1;
        $('main .container .menu ul li').eq(index-1).css({'fontWeight':'700','color':'#333333'}).siblings().css({'fontWeight':'500','color':'#bbbbbb'})
        $('main .container .content .cont').eq(index-1).fadeIn(300).siblings().fadeOut(100)
    }


    $('main .container .content ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    });


    a=$(window).width()

    if(a>=500 && a<1400){

        $('.close').click(function(){
            $('main .link').css({'position':'absolute','bottom':'50px'})
        });

    }if(a<500){

        $('.header .menu').click(function(){
            $('#wrap').css({'height':'100vh'})
        });
        $('.close').click(function(){
            $('#wrap').css({'height':'unset'})
        });

    }

    

});