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

    a=$('#main .contentwrap .content ul li > img').height()
            
    $('#main .contentwrap .content ul li').find('a').css({'height':a})
        

    $(window).on('resize, scroll touchmove mousewheel, mousemove',function(){
        
        a=$('#main .contentwrap .content ul li > img').height()

        $('#main .contentwrap .content ul li').find('a').css({'height':a})
        
    });

    $(window).on('resize',function(){

        i=$('#main .contentwrap .content ul li > img').height()
            
        $('#main .contentwrap .content ul li').find('a').css({'height':i})
        
    });


    b=$(window).width()

    if(b<500){

        c=$('#main .contentwrap .content .music').height()
        d=$('#main .contentwrap .content .cont').height()
        e=$('#main .contentwrap .content .cover').height()
        h=$('#main .contentwrap .content .stage').height()
        g=$('#main .contentwrap .content .radio').height()
        
        h=200

        $('#main').css({'height':c+h})


        $('#main .contentwrap .menu ul li').eq(1).click(function(){
            $('#main').css({'height':d+h})
        })

        $('#main .contentwrap .menu ul li').eq(2).click(function(){
            $('#main').css({'height':e+h})
        })

        $('#main .contentwrap .menu ul li').eq(3).click(function(){
            $('#main').css({'height':f+h})
        })

        $('#main .contentwrap .menu ul li').eq(4).click(function(){
            $('#main').css({'height':g+h})
        })


        $('.header .menu').click(function(){
            $('#wrap').css({'height':'100vh'})
        });
        $('.close').click(function(){
            $('#wrap').css({'height':'unset'})
        });

    }

    

});
