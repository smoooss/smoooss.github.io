$(document).ready(function(){



    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });




        a=$(window).scrollTop();
        b=$(window).width();

        if(a>=100){
                $('#header').css({'height':'100px','backgroundColor':'#ffffff'})
                $('#header .header .logo').css({'marginTop':'35px','marginLeft':'0'})
                $('#header .header .nav').css({'display':'block'})
                $('#header .header .nav a').css({'color':'#000000'})
                $('#header .header .navwrap').css({'display':'none'})
                $('#header .header .wrap').css({'position':'unset','marginTop':'35px'})
                $('#header .header .wrap .lang img:nth-child(1)').css({'display':'block'})
                $('#header .header .wrap .lang img:nth-child(2)').css({'display':'none'})
        if(b<=1400){
                $('#header .header .logo').css({'marginLeft':'0'})
                if(b<=1000){
                    $('#header .header .logo').css({'marginTop':'40px'})
                    if(b<=800){
                        $('#header .header .logo').css({'marginTop':'25px'})
                        $('#header .header .logo img:nth-child(1)').css({'display':'block'})
                        $('#header .header .logo img:nth-child(2)').css({'display':'none'})
                        $('#header .header .wrap').css({'position':'absolute','marginTop':'0'})
                        $('#header .header .wrap .lang a').css({'color':'#000000'})
                        $('#header .header .wrap .scribe').css({'backgroundColor':'#000000'})
                        $('#header .header .wrap .scribe a').css({'color':'#ffffff'})
                    }
                }
            }else{
                $('#header .header .logo').css({'marginTop':'35px'})
                $('#header .header .wrap').css({'position':'unset'})
            }
        }else{
            $('#header').css({'height':'150px','backgroundColor':'unset'})
            $('#header .header .logo').css({'marginTop':'60px','marginLeft':'30px'})
            $('#header .header .logo img:nth-child(1)').css({'display':'block'})
            $('#header .header .logo img:nth-child(2)').css({'display':'none'})
            $('#header .header .nav').css({'display':'none'})
            $('#header .header .navwrap').css({'display':'block'})
            $('#header .header .wrap').css({'position':'absolute','marginTop':'0'})
            $('#header .header .wrap .lang a').css({'color':'#000000'})
            $('#header .header .wrap .lang img:nth-child(1)').css({'display':'block'})
            $('#header .header .wrap .lang img:nth-child(2)').css({'display':'none'})
            $('#header .header .wrap .scribe').css({'backgroundColor':'#000000'})
            $('#header .header .wrap .scribe a').css({'color':'#ffffff'})
            if(b<=1400){
                $('#header .header .logo').css({'marginLeft':'0'})
                if(b<=800){
                    $('#header').css({'height':'100px'})
                    $('#header .header .logo').css({'marginTop':'25px'})
                    $('#header .header .logo img:nth-child(1)').css({'display':'none'})
                    $('#header .header .logo img:nth-child(2)').css({'display':'block'})
                    $('#header .header .nav').css({'display':'block'})
                    $('#header .header .nav a').css({'color':'#ffffff'})
                    $('#header .header .navwrap').css({'display':'none'})
                    $('#header .header .wrap .lang a').css({'color':'#ffffff'})
                    $('#header .header .wrap .lang img:nth-child(1)').css({'display':'none'})
                    $('#header .header .wrap .lang img:nth-child(2)').css({'display':'block'})
                    $('#header .header .wrap .scribe').css({'backgroundColor':'#ffffff'})
                    $('#header .header .wrap .scribe a').css({'color':'#000000'})
                }
            }
        }



    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).scrollTop();
        b=$(window).width();

        if(a>=100){
                $('#header').css({'height':'100px','backgroundColor':'#ffffff'})
                $('#header .header .logo').css({'marginTop':'35px','marginLeft':'0'})
                $('#header .header .nav').css({'display':'block'})
                $('#header .header .nav a').css({'color':'#000000'})
                $('#header .header .navwrap').css({'display':'none'})
                $('#header .header .wrap').css({'position':'unset','marginTop':'35px'})
                $('#header .header .wrap .lang img:nth-child(1)').css({'display':'block'})
                $('#header .header .wrap .lang img:nth-child(2)').css({'display':'none'})
        if(b<=1400){
                $('#header .header .logo').css({'marginLeft':'0'})
                if(b<=1000){
                    $('#header .header .logo').css({'marginTop':'40px'})
                    if(b<=800){
                        $('#header .header .logo').css({'marginTop':'25px'})
                        $('#header .header .logo img:nth-child(1)').css({'display':'block'})
                        $('#header .header .logo img:nth-child(2)').css({'display':'none'})
                        $('#header .header .wrap').css({'position':'absolute','marginTop':'0'})
                        $('#header .header .wrap .lang a').css({'color':'#000000'})
                        $('#header .header .wrap .scribe').css({'backgroundColor':'#000000'})
                        $('#header .header .wrap .scribe a').css({'color':'#ffffff'})
                    }
                }
            }else{
                $('#header .header .logo').css({'marginTop':'35px'})
                $('#header .header .wrap').css({'position':'unset'})
            }
        }else{
            $('#header').css({'height':'150px','backgroundColor':'unset'})
            $('#header .header .logo').css({'marginTop':'60px','marginLeft':'30px'})
            $('#header .header .logo img:nth-child(1)').css({'display':'block'})
            $('#header .header .logo img:nth-child(2)').css({'display':'none'})
            $('#header .header .nav').css({'display':'none'})
            $('#header .header .navwrap').css({'display':'block'})
            $('#header .header .wrap').css({'position':'absolute','marginTop':'0'})
            $('#header .header .wrap .lang a').css({'color':'#000000'})
            $('#header .header .wrap .lang img:nth-child(1)').css({'display':'block'})
            $('#header .header .wrap .lang img:nth-child(2)').css({'display':'none'})
            $('#header .header .wrap .scribe').css({'backgroundColor':'#000000'})
            $('#header .header .wrap .scribe a').css({'color':'#ffffff'})
            if(b<=1400){
                $('#header .header .logo').css({'marginLeft':'0'})
                if(b<=800){
                    $('#header').css({'height':'100px'})
                    $('#header .header .logo').css({'marginTop':'25px'})
                    $('#header .header .logo img:nth-child(1)').css({'display':'none'})
                    $('#header .header .logo img:nth-child(2)').css({'display':'block'})
                    $('#header .header .nav').css({'display':'block'})
                    $('#header .header .nav a').css({'color':'#ffffff'})
                    $('#header .header .navwrap').css({'display':'none'})
                    $('#header .header .wrap .lang a').css({'color':'#ffffff'})
                    $('#header .header .wrap .lang img:nth-child(1)').css({'display':'none'})
                    $('#header .header .wrap .lang img:nth-child(2)').css({'display':'block'})
                    $('#header .header .wrap .scribe').css({'backgroundColor':'#ffffff'})
                    $('#header .header .wrap .scribe a').css({'color':'#000000'})
                }
            }
        }
    });




    $(window).on('scroll touchmove mousewheel click resize',function(){

        a=$(window).scrollTop();
        b=$(window).width();

        if(b>1400){
            if(a>400){
                $('#main-cont > .title').css({'opacity':'1'})
                $('#main-cont .contwrap .textwrap').css({'opacity':'1'})
            }if(a>1000){
                $('#main-cont .contwrap .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1700){
                $('#sub-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>2200){
                $('#sub-cont .cont ul li:nth-child(n+4)').css({'opacity':'1'})
            }
        }else if(b>1280){
            if(a>300){
                $('#main-cont > .title').css({'opacity':'1'})
                $('#main-cont .contwrap .textwrap').css({'opacity':'1'})
            }if(a>800){
                $('#main-cont .contwrap .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1400){
                $('#sub-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1900){
                $('#sub-cont .cont ul li:nth-child(n+4)').css({'opacity':'1'})
            }
        }else if(b>1024){
            if(a>200){
                $('#main-cont > .title').css({'opacity':'1'})
                $('#main-cont .contwrap .textwrap').css({'opacity':'1'})
            }if(a>700){
                $('#main-cont .contwrap .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>1200){
                $('#sub-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1700){
                $('#sub-cont .cont ul li:nth-child(n+4)').css({'opacity':'1'})
            }
        }else if(b>640){
            if(a>100){
                $('#main-cont > .title').css({'opacity':'1'})
                $('#main-cont .contwrap .textwrap').css({'opacity':'1'})
            }if(a>500){
                $('#main-cont .contwrap .cont ul li:nth-child(n+1)').css({'opacity':'1'})
            }if(a>900){
                $('#sub-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1400){
                $('#sub-cont .cont ul li:nth-child(n+4)').css({'opacity':'1'})
            }
        }else if(b>500){
            if(a>100){
                $('#main-cont > .title').css({'opacity':'1'})
                $('#main-cont .contwrap .textwrap').css({'opacity':'1'})
            }if(a>500){
                $('#main-cont .contwrap .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>1000){
                $('#main-cont .contwrap .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>1500){
                $('#main-cont .contwrap .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>2100){
                $('#sub-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>2800){
                $('#sub-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>3200){
                $('#sub-cont .cont ul li:nth-child(n+4)').css({'opacity':'1'})
            }
        }else{
            if(a>100){
                $('#main-cont > .title').css({'opacity':'1'})
                $('#main-cont .contwrap .textwrap').css({'opacity':'1'})
            }if(a>500){
                $('#main-cont .contwrap .cont ul li:nth-child(1)').css({'opacity':'1'})
            }if(a>900){
                $('#main-cont .contwrap .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>1300){
                $('#main-cont .contwrap .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>1800){
                $('#sub-cont .cont ul li:nth-child(2)').css({'opacity':'1'})
            }if(a>2300){
                $('#sub-cont .cont ul li:nth-child(1)').css({'opacity':'1'})
                $('#sub-cont .cont ul li:nth-child(3)').css({'opacity':'1'})
            }if(a>2600){
                $('#sub-cont .cont ul li:nth-child(n+4)').css({'opacity':'1'})
            }
        }
    });



    

    $('#header .header .nav > ul > li').mouseover(function(){
        $(this).find('ul li').stop().fadeIn(200)

        a=$(window).scrollTop();
        b=$(window).width();

        if(b<=800){
            $(this).find('ul').css({'marginLeft':'0'})
            $(this).find('ul li').css({'marginRight':'10px','padding':'5px 0','backgroundColor':'unset'})
            $(this).find('ul li a').css({'color':'#ffffff'})
            
            if(a>=100){
                $(this).find('ul').css({'marginLeft':'-10px'})
                $(this).find('ul li').css({'marginRight':'0','padding':'10px','backgroundColor':'#ffffff'})
                $(this).find('ul li a').css({'color':'#333333'})
            }else{
                $(this).find('ul').css({'marginLeft':'0'})
                $(this).find('ul li').css({'marginRight':'10px','padding':'5px 0','backgroundColor':'unset'})
                $(this).find('ul li a').css({'color':'#ffffff'})    
            }
        }
    }).mouseout(function(){
        $(this).find('ul li').stop().fadeOut(100)
    });




    $('#header .header .navwrap > ul > li').mouseover(function(){
        $(this).find('ul li').stop().fadeIn(200)
    }).mouseout(function(){
        $(this).find('ul li').stop().fadeOut(100)
    });




    $('#header .header .wrap .lang').mouseover(function(){
        $(this).find('ul').stop().fadeIn(200)
        $(this).find('ul li').css({'color':'#333333','backgroundColor':'#ffffff'})

        a=$(window).width();
        b=$(window).scrollTop();

        if(a<800){
            if(b<100){
                $(this).find('ul li').css({'color':'#ffffff','backgroundColor':'unset'})
            }
        }if(a<600){
            $('#header .header .nav').css({'display':'none'})
        }
    }).mouseout(function(){
        a=$(window).width();

        $(this).find('ul').stop().fadeOut(100)
        if(a<=600){
            $('#header .header .nav').css({'display':'block'})
        }
    });




    $('#main-ad').mouseover(function(){
        $(this).find('.name').css({'textDecoration':'underline','text-underline-position':'under'})
    }).mouseout(function(){
        $(this).find('.name').css({'textDecoration':'none'})
    });



 
    $('#main-cont .textwrap').mouseover(function(){
        $(this).find('.name').css({'textDecoration':'underline','text-underline-position':'under'})
    }).mouseout(function(){
        $(this).find('.name').css({'textDecoration':'none'})
    });




    $('.cont ul li').mouseover(function(){
        $(this).find('.name').css({'textDecoration':'underline','text-underline-position':'under'})
    }).mouseout(function(){
        $(this).find('.name').css({'textDecoration':'none'})
    });



    a=$('#sub-cont .cont .on').height();
    
    $('#sub-cont .cont ul li .text').css({'height':a})




    $(window).on('resize', function(){
        a=$('#sub-cont .cont .on').height();

        $('#sub-cont .cont ul li .text').css({'height':a})
    });

});