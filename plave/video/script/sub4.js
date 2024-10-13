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

    a=$('main .container .content .cont.c1 ul li > img').height()

    $('main .container .content .cont ul li').find('a').css({'height':a})

    $(window).on('resize, click, mousemove',function(){
        
        a=$('main .container .content .cont.c1 ul li > img').height()

        $('main .container .content .cont.c1 ul li').find('a').css({'height':a})

        b=$('main .container .content .cont.c2 ul li > img').height()

        $('main .container .content .cont.c2 ul li').find('a').css({'height':b})

        c=$('main .container .content .cont.c3 ul li > img').height()

        $('main .container .content .cont.c3 ul li').find('a').css({'height':c})

        d=$('main .container .content .cont.c4 ul li > img').height()

        $('main .container .content .cont.c4 ul li').find('a').css({'height':d})

        e=$('main .container .content .cont.c5 ul li > img').height()

        $('main .container .content .cont.c5 ul li').find('a').css({'height':e})
        
    });



    $('main .container .content ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    });


    f=$(window).width()

    if(f<500){

        g=$('main .container .content .cont.c1').height()
        h=$('main .container .content .cont.c2').height()
        i=$('main .container .content .cont.c3').height()
        j=$('main .container .content .cont.c4').height()
        k=$('main .container .content .cont.c5').height()
        
        l=200

        $('main').css({'height':g+l})

        $('main .container .menu ul li').eq(0).click(function(){
            $('main').css({'height':g+l})
        })

        $('main .container .menu ul li').eq(1).click(function(){
            $('main').css({'height':h+l})
        })

        $('main .container .menu ul li').eq(2).click(function(){
            $('main').css({'height':i+l})
        })

        $('main .container .menu ul li').eq(3).click(function(){
            $('main').css({'height':j+l})
        })

        $('main .container .menu ul li').eq(4).click(function(){
            $('main').css({'height':k+l})
        })


        $('.header .menu').click(function(){
            $('#wrap').css({'height':'100vh'})
        });
        $('.close').click(function(){
            $('#wrap').css({'height':'unset'})
        });

    }

    

});