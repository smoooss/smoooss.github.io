$(document).ready(function(){
    
    const totalPages = $('.calendar').length; // 전체 페이지 수
    let currentPage = totalPages; // 현재 페이지

    // 페이지 로드 시 첫  페이지만 보이도록 설정
    function showTitles(page) {
        $('.calendar').hide(); // 모든 페이지 숨김
        const start = (page - 1) * 1;
        const end = start + 1;
        $('.calendar').slice(start, end).show(); // 해당 페이지만 표시
        $('#next').hide()
    }

    // 첫 페이지 로드 시 해당 페이지 보여주기
    showTitles(currentPage);

    $('.calendar.c'+currentPage).find('.date ul li').click(date);
    
    let index = 0

    function date(){
        index = $(this).index()+1;
        $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
        $('.calendar.c'+currentPage).find('.schedule ul').eq(index-1).css({'display':'block'})
    }
    

    $(window).click(function(){
        
        if(currentPage==1){
            $('#prev').hide()
            $('#next').css({'position':'relative','left':'94%'})
        }if(currentPage > 1){
            $('#prev').show()
            $('#next').css({'position':'unset','left':'unset'})
        }if(currentPage==totalPages){
            $('#next').hide()
        }
    });

    // 다음 페이지로 이동
    $('#next').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            $('.calendar').hide()
            $('.calendar.c'+currentPage).css({'display':'flex'})
            $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'block'})

            $('.calendar.c'+currentPage).find('.date ul li').click(date);
    
            let index = 0
        
            function date(){
                index = $(this).index()+1;
                $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
                $('.calendar.c'+currentPage).find('.schedule ul').eq(index-1).css({'display':'block'})
            }

            if(a<500){
                $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
                $('.calendar.c'+currentPage).find('.first').css({'display':'block'})
            }
        }
    });

    

    // 이전 페이지로 이동
    $('#prev').click(function() {
        if (currentPage > 1) {
            currentPage--;
            $('#next').show()
            $('.calendar').hide()
            $('.calendar.c'+currentPage).css({'display':'flex'})
            $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'block'})
            
            $('.calendar.c'+currentPage).find('.date ul li').click(date);
    
            let index = 0
        
            function date(){
                index = $(this).index()+1;
                $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
                $('.calendar.c'+currentPage).find('.schedule ul').eq(index-1).css({'display':'block'})
            }
            
            if(a<500){
                $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
                $('.calendar.c'+currentPage).find('.first').css({'display':'block'})
            }
        }

    });

    a=$(window).width();
    c=$(window).height();

    if(a>=500 && a<550){
        $('main .link').css({'position':'absolute'})
        if(c>=950){
            $('main .link').css({'position':'fixed','bottom':'90px'})
            $('footer').css({'position':'fixed'})
        }
        if(c<950){
            $('main .link').css({'position':'absolute'})
            $('footer').css({'position':'relative'})
        }
    }

    $('.close').click(function(){

        a=$(window).width();
        c=$(window).height();

        if(a>=550 && a<700){
            $('main .link').css({'position':'absolute'})
        }
        if(a>=500 && a<550){
            $('main .link').css({'position':'absolute'})
            if(c>=950){
                $('main .link').css({'position':'fixed','bottom':'90px'})
                $('footer').css({'position':'fixed'})
            }
            if(c<950){
                $('main .link').css({'position':'absolute'})
                $('footer').css({'position':'relative'})
            }
        }
    });


    $(window).resize(function(){

        a=$(window).width();
        b=$('nav').hasClass('on')
        c=$(window).height();

        if(a>=950 && a<1400){
            if(b==false){
                $('main .link').css({'position':'absolute'})
            }
        }
        if(a>=700 && a<950){
            if(b==false){
                $('main .link').css({'position':'relative','bottom':'-15px'})
            }
        }
        if(a>=550 && a<700){
            if(b==false){
                $('footer').css({'position':'relative'})
            }
        }
        if(a>=500 && a<550){
            if(b==false){
                if(c>=950){
                    $('main .link').css({'position':'fixed','bottom':'90px'})
                    $('footer').css({'position':'fixed'})
                }
                if(c<950){
                    $('main .link').css({'position':'absolute'})
                    $('footer').css({'position':'relative'})
                }
            }
        }
    });

});