$(document).ready(function(){

    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });


    $('main .container .menu ul li').click(menu);

    let index = 0

    function menu(){
        index = $(this).index()+1;
        $('html,body').animate({scrollTop:0},0)
        $('main .container .menu ul li').eq(index-1).css({'fontWeight':'700','color':'#333333'}).siblings().css({'fontWeight':'500','color':'#bbbbbb'})
        $('main .container .content .cont').eq(index-1).fadeIn(300).siblings().fadeOut(100)
    }


    $('main .container .content ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    });


    $(window).resize(function(){

        a=$(window).width();
        b=$('nav').hasClass('on')
        c=$(window).height();

        if(a>=500 && a<700){
            if(c<700){
                if(b==false){
                    $('main .link').css({'position':'relative','bottom':'20px'})
                }
            }
        }
    });
    
    

});