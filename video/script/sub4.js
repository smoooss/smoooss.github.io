$(document).ready(function(){

    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });

    $('#main .contentwrap .imagewrap .image.i1 ul li').click(image1);

    let index = 0

    function image1(){
        index = $(this).index()+1;
        $('#main .contentwrap .videowrap .video.v1 ul li').eq(index-1).fadeIn(300).siblings().fadeOut(100)
    }

    $('#main .contentwrap .imagewrap .image.i2 ul li').click(image2);
    
    let idx = 0

    function image2(){
        idx = $(this).index()+1;
        $('#main .contentwrap .videowrap .video.v2 ul li').eq(idx-1).fadeIn(300).siblings().fadeOut(100)
    }

    $('#main .contentwrap .imagewrap .image.i3 ul li').click(image3);
    
    let indx = 0

    function image3(){
        indx = $(this).index()+1;
        $('#main .contentwrap .videowrap .video.v3 ul li').eq(indx-1).fadeIn(300).siblings().fadeOut(100)
    }

    $('#main .contentwrap .menu ul li').click(function(){
        $('#main .contentwrap .menu ul li').css({'fontWeight':'500','color':'#bbbbbb'})
        $(this).css({'fontWeight':'700','color':'#333333'})
    });

    $('#main .contentwrap .menu ul li').eq(0).click(function(){
        $('#main .contentwrap .videowrap .video').fadeOut(100)
        $('#main .contentwrap .videowrap .video.v1').fadeIn(300)
        $('#main .contentwrap .imagewrap .image').fadeOut(100)
        $('#main .contentwrap .imagewrap .image.i1').fadeIn(300)
    });

    $('#main .contentwrap .menu ul li').eq(1).click(function(){
        $('#main .contentwrap .videowrap .video').fadeOut(100)
        $('#main .contentwrap .videowrap .video.v2').fadeIn(300)
        $('#main .contentwrap .imagewrap .image').fadeOut(100)
        $('#main .contentwrap .imagewrap .image.i2').fadeIn(300)
    })

    $('#main .contentwrap .menu ul li').eq(2).click(function(){
        $('#main .contentwrap .videowrap .video').fadeOut(100)
        $('#main .contentwrap .videowrap .video.v3').fadeIn(300)
        $('#main .contentwrap .imagewrap .image').fadeOut(100)
        $('#main .contentwrap .imagewrap .image.i3').fadeIn(300)
    })



    a=$(window).width()
    if(a<500){

        $('#main .contentwrap .imagewrap .image ul li').click(function(){
            b=$(window).scrollTop()
            
            $('#main .contentwrap .videowrap').css({'top':b,'display':'block'})
            $('#main .contentwrap .videowrap .btn').css({'display':'block'})
            $('html,body').css({'overflow':'hidden'})
        })
        $('#main .contentwrap .videowrap .btn img').click(function(){
            $('#main .contentwrap .videowrap').css({'display':'none'})
            $('#main .contentwrap .videowrap .btn').css({'display':'none'})
            $('html,body').css({'overflow':'auto'})
        })

        $('.header .menu').click(function(){
            $('#main .link').css({'bottom':'60px'})
        });
        $('.close').click(function(){
            $('#main .link').css({'bottom':'20px'})
        });

    }else{
        $('#main .contentwrap .imagewrap .image ul li').mouseover(function(){
            $(this).find('a').css({'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        });

        $('#main .contentwrap .imagewrap .image ul li').click(function(){
            $(this).css({'opacity':'1'}).siblings().css({'opacity':'0.5'})
        });
    }

    

});