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
    
    a=$(window).width()
    b=$(window).height()
    
    if(a>=500 && a<1400){

        $('.close').click(function(){
            $('main .link').css({'position':'absolute'})
        });

    }if(a<500){
        $('.header .menu').click(function(){
            $('main .link').css({'bottom':'60px'})
        });
        $('.close').click(function(){
            $('main .link').css({'bottom':'20px'})
        });
        if(b>715){
            $('main .link').css({'position':'fixed','bottom':'60px'})
            $('footer').css({'position':'fixed'})
    
            $('.header .menu').click(function(){
                $('footer').css({'position':'fixed'})
            });
            $('.close').click(function(){
                $('main .link').css({'position':'fixed','bottom':'60px'})
                $('footer').css({'position':'fixed'})
            });
        }
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

            $('.calendar.c'+currentPage).find('.date ul li').click(date);
    
            let index = 0
        
            function date(){
                index = $(this).index()+1;
                $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
                $('.calendar.c'+currentPage).find('.schedule ul').eq(index-1).css({'display':'block'})
            }

            if(a<500){
                
                if(currentPage==1){
                    $('main .container .calendar.c1 .cont.c2 .schedule ul').eq(8).css({'display':'block'})
                }else if(currentPage==2){
                    $('main .container .calendar.c2 .cont.c2 .schedule ul').eq(1).css({'display':'block'})
                }else if(currentPage==3){
                    $('main .container .calendar.c3 .cont.c2 .schedule ul').eq(4).css({'display':'block'})
                }else if(currentPage==4){
                    $('main .container .calendar.c4 .cont.c2 .schedule ul').eq(1).css({'display':'block'})
                }else if(currentPage==5){
                    $('main .container .calendar.c5 .cont.c2 .schedule ul').eq(2).css({'display':'block'})
                }else if(currentPage==6){
                    $('main .container .calendar.c6 .cont.c2 .schedule ul').eq(5).css({'display':'block'})
                }
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

            $('.calendar.c'+currentPage).find('.date ul li').click(date);
    
            let index = 0
        
            function date(){
                index = $(this).index()+1;
                $('.calendar.c'+currentPage).find('.schedule ul').css({'display':'none'})
                $('.calendar.c'+currentPage).find('.schedule ul').eq(index-1).css({'display':'block'})
            }
            
            if(a<500){
                
                if(currentPage==1){
                    $('main .container .calendar.c1 .cont.c2 .schedule ul').eq(8).css({'display':'block'})
                }else if(currentPage==2){
                    $('main .container .calendar.c2 .cont.c2 .schedule ul').eq(1).css({'display':'block'})
                }else if(currentPage==3){
                    $('main .container .calendar.c3 .cont.c2 .schedule ul').eq(4).css({'display':'block'})
                }else if(currentPage==4){
                    $('main .container .calendar.c4 .cont.c2 .schedule ul').eq(1).css({'display':'block'})
                }else if(currentPage==5){
                    $('main .container .calendar.c5 .cont.c2 .schedule ul').eq(2).css({'display':'block'})
                }else if(currentPage==6){
                    $('main .container .calendar.c6 .cont.c2 .schedule ul').eq(5).css({'display':'block'})
                }
            }
        }

    });

});
