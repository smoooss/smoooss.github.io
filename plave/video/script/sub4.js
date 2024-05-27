$(document).ready(function(){

    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });


    $('#main .contentwrap .menu ul li').click(menu);

    let index = 0

    function menu(){
        index = $(this).index()+1;
        $('#main .contentwrap .menu ul li').eq(index-1).css({'fontWeight':'700','color':'#333333'}).siblings().css({'fontWeight':'500','color':'#bbbbbb'})
        $('#main .contentwrap .content div').eq(index-1).fadeIn(300).siblings().fadeOut(100)
    }

    a=$('#main .contentwrap .content .music ul li > img').height()

    $('#main .contentwrap .content div ul li').find('a').css({'height':a})

    $(window).on('resize, click',function(){
        
        a=$('#main .contentwrap .content .music ul li > img').height()

        $('#main .contentwrap .content .music ul li').find('a').css({'height':a})

        b=$('#main .contentwrap .content .cont ul li > img').height()

        $('#main .contentwrap .content .cont ul li').find('a').css({'height':b})

        c=$('#main .contentwrap .content .cover ul li > img').height()

        $('#main .contentwrap .content .cover ul li').find('a').css({'height':c})

        d=$('#main .contentwrap .content .stage ul li > img').height()

        $('#main .contentwrap .content .stage ul li').find('a').css({'height':d})

        e=$('#main .contentwrap .content .radio ul li > img').height()

        $('#main .contentwrap .content .radio ul li').find('a').css({'height':e})
        
    });



    $('#main .contentwrap .content ul li').mouseover(function(){
        $(this).find('a').css({'opacity':'1'})
    }).mouseout(function(){
        $(this).find('a').css({'opacity':'0'})
    });


    f=$(window).width()

    if(f<500){

        g=$('#main .contentwrap .content .music').height()
        h=$('#main .contentwrap .content .cont').height()
        i=$('#main .contentwrap .content .cover').height()
        j=$('#main .contentwrap .content .stage').height()
        k=$('#main .contentwrap .content .radio').height()
        
        l=200

        $('#main').css({'height':g+l})

        $('#main .contentwrap .menu ul li').eq(0).click(function(){
            $('#main').css({'height':g+l})
        })

        $('#main .contentwrap .menu ul li').eq(1).click(function(){
            $('#main').css({'height':h+l})
        })

        $('#main .contentwrap .menu ul li').eq(2).click(function(){
            $('#main').css({'height':i+l})
        })

        $('#main .contentwrap .menu ul li').eq(3).click(function(){
            $('#main').css({'height':j+l})
        })

        $('#main .contentwrap .menu ul li').eq(4).click(function(){
            $('#main').css({'height':k+l})
        })


        $('.header .menu').click(function(){
            $('#wrap').css({'height':'100vh'})
        });
        $('.close').click(function(){
            $('#wrap').css({'height':'unset'})
        });

    }

    

});
