$(document).ready(function(){

    $(window).on('scroll touchmove mousewheel, mousemove',function(){
        $('main .container .content .text').css({'opacity':'1'})
        $('main .container').css({'opacity':'1'})
    });




    a=$(window).width()

    if(a>=500){
        $('main .container ul li').mouseover(function(){
            $(this).find('a').css({'opacity':'1'})
        }).mouseout(function(){
            $(this).find('a').css({'opacity':'0'})
        })
    }else{
        $('main .container .content .text').css({'opacity':'1'})
        $('main .container').css({'opacity':'1'})
    }




    $('.header .menu').click(function(){

        $('header, main').css({'display':'none'})
        $('nav').fadeIn(150).addClass('on')
        $('footer').css({'bottom':0})
        $('footer .link .bl').css({'display':'block'})
        $('footer .link .wh').css({'display':'none'})
        $('footer .footer p').css({'color':'#333333'})

        a=$(window).width();

        if(a<1400){
            $('#foyer footer').css({'position':'relative'})
        }
        if(a<500){
            $('footer').css({'position':'absolute','bottom':'10px'})
        }
    });

    $('.close').click(function(){
        
        $('header, main').css({'display':'block'})
        $('nav').fadeOut(100).removeClass('on')
        $('footer .link .bl').css({'display':'none'})
        $('footer .link .wh').css({'display':'block'})
        $('#foyer .footer p').css({'color':'#ffffff'})

        a=$(window).width();

        if(a<1400){
            $('#foyer footer').css({'position':'absolute'})
        }
        if(a<700){
            $('footer').css({'bottom':'10px'})
            $('#foyer footer').css({'position':'absolute'})
        }
        if(a<500){
            $('footer').css({'position':'relative'})
            $('#foyer footer').css({'position':'absolute'})
        }
    });




    $('#profile .container .menu ul li').click(profilemenu);
    
    let index = 0
 
    function profilemenu(){
        index = $(this).index()+1;
        $(this).css({'fontSize':'1rem','fontWeight':'700'}).siblings().css({'fontSize':'0.9rem','fontWeight':'500'})
        $('#profile .container .content .front ul li').eq(index-1).css({'display':'block'}).siblings().css({'display':'none'})
        $('#profile .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
    
        a=$(window).width();
        
        if(a>=500 && a<950){
            $('#profile .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
        }
    }




    let openContent = null; // 현재 열려 있는 콘텐츠
    
    $('#releases .title').click(function(event) {
        event.stopPropagation(); // 부모 요소로 이벤트 전파 방지
        const content = $(this).find('.content'); // 클릭된 타이틀의 콘텐츠

        // 이미 열려 있는 콘텐츠라면 변화 없음
        if (content.is(openContent)) {
            return;
        }

        // 열려 있는 콘텐츠가 있으면 slideUp()
        if (openContent) {
            openContent.slideUp();
        }

        // 클릭된 타이틀의 콘텐츠를 slideDown()
        content.slideDown();
        openContent = content; // 현재 열려 있는 콘텐츠로 업데이트
    });

    // main 영역 클릭 시 열려 있는 콘텐츠를 slideUp()
    $('#releases main').click(function() {
        if (openContent) {
            openContent.slideUp();
            openContent = null; // 열려 있는 콘텐츠 초기화
        }
    });


    

    $(window).resize(function(){

        a=$(window).width();
        b=$('nav').hasClass('on');

        if(b==true){

            $('footer').css({'bottom':0})
            $('#foyer footer').css({'position':'absolute'})

            if(a<1400){
                $('#foyer footer').css({'position':'relative'})
            }
            if(a<500){
                $('footer').css({'position':'absolute'})
            }
        }

        if(b==false){

            $('footer').css({'bottom':0})
            
            if(a<1400){
                $('#foyer footer').css({'position':'absolute'})
                $('#profile .container .textwrap .text.t'+index).css({'display':'block'}).siblings().css({'display':'none'})
            }
            if(a<950){
                $('#profile .container .textwrap .text.t'+index).css({'display':'flex'}).siblings().css({'display':'none'})
            }
            if(a<700){
                $('footer').css({'bottom':'10px'})
                $('#foyer footer').css({'position':'absolute'})
            }
            if(a<500){
                $('footer').css({'position':'relative'})
                $('#foyer footer').css({'position':'absolute'})
            }
        }
        
    });


});
